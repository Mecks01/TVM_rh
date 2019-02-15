import { Component, OnInit, Injectable } from '@angular/core';
import {Personne} from '../models/Personne.model' ;
import {PersonnesService} from '../services/personnes.service' ;
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SinglePersonneComponent } from './single-personne/single-personne.component';
import swal from 'sweetalert2';

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
  linkImg="" ;
  idUser:number ;
  
  constructor(private persService: PersonnesService,
              private router:Router){
  }

  ngOnInit(){
      this.getPersonnes() ;
      this.idUser=+localStorage.getItem('currentUser') ;
      this.persService.getSinglePersonne(this.idUser).subscribe(
        (res: Personne) => {
          this.currentUser = res;
          this.linkImg="assets/images/" + this.currentUser.image ;
        },
        (err) => {
          this.error = err;
        }
      );
  }
  
  gotoProfil(ind:number){
    this.router.navigate(['/Personne','view' ,this.personnes[+ind].id]) ;
  }

  gotoProfilUser(){
    this.router.navigate(['/Personne','view' ,this.idUser]) ;
  }

   onNewPersonne(){
    this.router.navigate(['/auth','signup']) ;
  }
  getPersonnes(): void {
    this.persService.getAll().subscribe(
      (res: Personne[]) => {
        this.personnes = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  onDeletePers(id:number){
    let personne=this.personnes[id] ; 
      swal({
        title:"Confirmation Suppression !?",
        text:"Vous voulez vraiment supprimer l'employé : " + personne.nom,
        type:"warning",
        showCancelButton:true ,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Oui, Supprimer!',
        cancelButtonText: "Non, Annuler!"
      }).then(val =>{
          if(val.value==true){
                this.persService.delete(personne.id)
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
