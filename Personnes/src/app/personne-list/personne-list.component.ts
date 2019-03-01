import { Component, OnInit, Injectable } from '@angular/core';
import {Personne} from '../models/Personne.model' ;
import {PersonnesService} from '../services/personnes.service' ;
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SinglePersonneComponent } from './single-personne/single-personne.component';
import swal from 'sweetalert2';
import { Professionnal } from '../models/professional.model';
import { ProfessionService } from '../services/profession.service';

@Component({
  selector: 'app-personne-list ',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {   
   personnes:Personne[] =[] ;
   personnesSubscription: Subscription ;
  error='' ;
  success='' ;
  singlepers: SinglePersonneComponent ;
  currentUser=new Personne() ;
  cUprofessionnel= new Professionnal('','','','','','','','') ;
  linkImg="" ;
  idUser:number ;
  p: number=1 ;
  
  constructor(private persService: PersonnesService,
              private router:Router,
              private profService:ProfessionService){
  }

  ngOnInit(){
    
      this.getPersonnes() ;
      this.idUser=+localStorage.getItem('currentUser') ;
      this.persService.getSinglePersonne(this.idUser).subscribe(
        (res: Personne) => {
          this.currentUser = res;
          this.linkImg="assets/images/" + this.currentUser.image;
        },
        (err) => {
          this.error = err;
        }
      );
      this.profService.getSinglePersonneProf(+localStorage.getItem('currentUser')).subscribe(
        (res: Professionnal) => {
          this.cUprofessionnel = res;
        },
        (err) => {
          this.error = err;
        }
      );
  }
  
  gotoProfil(ind:number){
    this.router.navigate(['/Personne','view' ,+ind]) ;
  }

  gotoProfilUser(){
    this.router.navigate(['/Personne','view' ,this.idUser]) ;
  }

   onNewPersonne(){
    this.router.navigate(['/auth','signup']) ;
  }
  getPersonnes(): void {
    this.persService.getAll(localStorage.getItem('currentUserServ')).subscribe(
      (res: Personne[]) => {
        this.personnes = res.filter((personne) =>{
          return +personne['id'] !== +this.idUser ;
        });
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onDeletePers(id:number,nom:string){
      swal({
        title:"Confirmation Suppression !?",
        text:"Vous voulez vraiment supprimer l'employé : " + nom,
        type:"warning" ,
        showCancelButton:true ,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Oui, Supprimer!',
        cancelButtonText: "Non, Annuler!"
      }).then(val =>{
          if(val.value==true){
                this.persService.delete(id)
                     .subscribe(
                     (res:Personne[]) =>{
                       this.persService.personnes =res ;
                      },
                      (err) => this.error=err) ;
                        window.location.reload() ;    
          }
      })
      ;
    }

    getNombre(){
      return this.personnes.length ;
    }
}
