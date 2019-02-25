import { Component, OnInit, Injectable, ElementRef, TemplateRef } from '@angular/core';
import { Personne } from 'src/app/models/Personne.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnesService } from 'src/app/services/personnes.service';
import swal from 'sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { frLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
defineLocale('fr',frLocale) ;


@Component({
  selector: 'app-single-personne',
  templateUrl: './single-personne.component.html', 
  styleUrls: ['./single-personne.component.scss']
})
export class SinglePersonneComponent implements OnInit {
  datePickerConfig : Partial<BsDatepickerConfig> ;
  personne : Personne ;
  error ='' ;
  success='' ;
  extension='' ;
  isSelected=false ;
  file="" ;
  listExt :string[] = [".jpg",'.png','.gif','.jpeg'] ;
  isIn:boolean ;
  linkImg="" ;
  isClicked:false ;
  isClicked1:false ;
  modalRef: BsModalRef;
  stringDate:string ;

  userNum=localStorage.getItem('currentUser') ;
  
  constructor(private route:ActivatedRoute,
    public personnesService:PersonnesService,
    private router:Router,
    private elem:ElementRef,
    private bsModalService:BsModalService,
    private localeService: BsLocaleService) {
      this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat : "DD/MM/YYYY",
      }) ;
      this.localeService.use('fr') ;
     }
  

  ngOnInit() { 
    this.personne = new Personne() ;  
    const id=this.route.snapshot.params['id'] ;
    this.personnesService.getSinglePersonne(+id).subscribe(
      (res: Personne) => {
        this.personne = res;
        this.linkImg="assets/images/" + this.personne.image ;
        this.stringDate=this.personne.dateNaissance ;
      },
      (err) => {
        this.error = err;
      }
    ); 
    this.stringDate=this.personne.dateNaissance ;
  }
//////////////////////////////suppression personne
  onDeletePersonne(){
        swal({
          title:"Confirmation Suppression !?",
          text:"Vous voulez vraiment supprimer l'employé : " + this.personne.nom,
          type:"warning",
          showCancelButton:true ,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Oui, Supprimer!',
          cancelButtonText: "Non, Annuler!"
        }).then(val =>{
            if(val.value==true){
                  console.log(val) ;
                  this.personnesService.delete(this.personne.id)
                       .subscribe(
                       (res:Personne[]) =>{
                         this.personnesService.personnes =res ;
                        },
                        (err) => this.error=err) ;
                          //this.router.navigate(['/Personnes']) ;   
                         // window.location.reload() ; 
            }
        })
        ;
  }
  //////////Changement avatar
  onChangeProfil():void{
      let files=this.elem.nativeElement.querySelector('#reavatar').files ;
      let formData= new FormData() ;
      let file=files[0] ;
      this.extension= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
      let oldLink=this.personne.image.trim() ;
      let newLink=this.personne.numTel +"_Image" + this.extension ;
      this.file=file.name ;
      formData.append('reavatar',file,file.name) ;
      let listLink ={'oldLink':oldLink ,'newLink':newLink,'id':this.personne.id.toString()}
      this.personnesService.reUploadImage(formData,listLink).subscribe() ;
  }

  check(){
    this.isSelected=true ;
    let files=this.elem.nativeElement.querySelector('#reavatar').files ;
      let file=files[0] ;
      this.extension= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
      this.file=file.name ;
      if(this.listExt.indexOf(this.extension) >= 0){
          this.isIn=true ;
      }   
      else{
        this.isIn=false ;
      }
  }

  //Update personnes 
    onUpdate(template: TemplateRef<any>){
        this.modalRef = this.bsModalService.show(template,{ class: 'container' });
    }

      updatePersDetails(f){
        // this.personne.nom=this.personne.nom.toUpperCase() ;
        if(this.personne.dateNaissance == this.stringDate.toString()){
          this.personne.dateNaissance=this.stringDate.toString() ;
        }
        else{
        this.personne.dateNaissance=this.personnesService.frenchDate(this.stringDate.toString()) ;
        }
        this.personnesService.update(this.personne).subscribe(
          (res:Personne[])=>{
            //Mis a jour liste pers
            this.personnesService.personnes=res ;
            //reset the form
            window.location.reload() ;
          },
          (err)=>this.error=err 
        ) ;
        this.modalRef.hide() ;
      }
}
