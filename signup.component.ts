import { Component, OnInit, ElementRef } from '@angular/core';
import { Personne } from 'src/app/models/Personne.model';
import { PersonnesService } from 'src/app/services/personnes.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {BsDatepickerConfig, BsLocaleService} from 'ngx-bootstrap/datepicker' ;
import { frLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
defineLocale('fr',frLocale) ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  vesrProfData:boolean ;
  datePickerConfig : Partial<BsDatepickerConfig> ;
  error='' ;
  success='' ;
  selectedFile:File= null ;
  extension:string ;
  personne =new Personne() ;
  isSelected=false ;
  file="" ;
  listExt :string[] = [".jpg",'.png','.gif','.jpeg'] ;
  isIn:boolean ;
  stringDate:string ;
  numbers:string[];
  existingNumber:boolean ;
  prov="Antananarivo" ;
  

  constructor(private personnesService: PersonnesService,
    private router:Router,
    private elem:ElementRef ,
    private localeService: BsLocaleService
    ) { 
      this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat : "DD/MM/YYYY",
      }) ;
      this.localeService.use('fr') ;
    }

  ngOnInit() {
    this.personne.nationalite="Malagasy" ;
    this.personne.civilite="Célibataire" ;
    this.vesrProfData=false ;
  }

  addPers(f){
    this.success='Vous vous &ecirctes enregistré avec succès! ' ;
    swal({
      title:"Confirmation enregistrement !?",
      text:"Confirmer info personnels et remplir info professionnels ? " ,
      type:"info",
      showCancelButton:true ,
      confirmButtonColor: 'darkcyan',
      confirmButtonText: 'Oui, enregistrer!',
      cancelButtonText: "Annuler!"
    }).then(val =>{
      if(val.value == true){
          //upload image ;
    if(this.isSelected == true){
      let files=this.elem.nativeElement.querySelector('#avatar').files ;
      let formData= new FormData() ;
      let file=files[0] ;
      this.extension= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;   
      formData.append('avatar',file,file.name) ;
      this.personne.image =this.personne.numTel +"_Image" + this.extension ;
      this.personnesService.uploadImage(formData,this.personne.image).subscribe() ;
      }
      else{
        this.personne.image = "defaultImg.png" ;
      }
      //Store personnes
      this.personne.adresse = this.personne.adresse + " " + this.prov ;
      this.personne.nom=this.personne.nom.toUpperCase() ;
      this.personne.dateNaissance=this.personnesService.frenchDate(this.stringDate) ;
      this.personnesService.store(this.personne)
      .subscribe(
        (res:Personne[])=>{
          //Mis a jour liste pers
          this.personnesService.personnes=res ;
          //reset the form
          f.reset() ;
        },
        (err)=>this.error=err 
      ) ;
        this.vesrProfData=true; 
      }
    })
   ;
  }
  ////////////////check Valide Image
  check(){
    this.isSelected=true ;
    let files=this.elem.nativeElement.querySelector('#avatar').files ;
      let file=files[0] ;
      this.file=file.name ;
      this.extension= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
      if(this.listExt.indexOf(this.extension) >= 0){
          this.isIn=true ;
      }   
      else{
        this.isIn=false ;
      }
  } 

  onChangeNumber(){
    this.personnesService.getAllNumber().subscribe(
      (res: string[]) => {
        this.numbers = res;
        let exist=this.numbers.indexOf(this.personne.numTel) ;
        console.log(exist)
        if(exist === -1){
          this.existingNumber=false ;
        }
        else{
          this.existingNumber=true ;
        }
        console.log(this.existingNumber)
      },
      (err) => {
        this.error = err;
      }
    )
  }
}
  


