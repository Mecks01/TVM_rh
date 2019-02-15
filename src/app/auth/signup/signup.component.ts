import { Component, OnInit, ElementRef } from '@angular/core';
import { Personne } from 'src/app/models/Personne.model';
import { PersonnesService } from 'src/app/services/personnes.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {BsDatepickerConfig, BsLocaleService} from 'ngx-bootstrap/datepicker' ;
import { frLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { Professionnal } from 'src/app/models/professional.model';
import { Diplome } from 'src/app/models/diplome.model';
import { FormBuilder, Validators } from '@angular/forms';
defineLocale('fr',frLocale) ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ///////////////Variables personnel data
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
  visible=false ;

  ///////////Variable professionnal data
  existDiplome=false ;
  isSelectedCV=false ;
  listExtCV:string[] = [".doc",".pdf",".html"] ;
  extensionCV:string ;
  isInCV:boolean ;
  profession = new Professionnal() ;
  services = ['Informatique','Technique','Programmation','Production','Information'] ;
  branche = ['TVM'] ;
  fonctions = {
                'Informatique':['ADSL','Monteur','Programme'],
                'Technique':['Technicien','Journaliste','Endineer'],
                'Programmation': ['aaaaa','bbbbb','ccccc'],
                'Production':['ttttty','eeeeee','zzzzz'],
                'Information' :['yyyy','ggggg','nnnnnnn']
              }
  

  constructor(private personnesService: PersonnesService,
    private formBuilder:FormBuilder,
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
    this.profession.nomService="Choisir service" ;
    this.profession.fonction="Choisir fonction" ;
    this.profession.grade="Employé" ;
  }

  getService(){
    let grades = {'Directeur' : [this.branche,['Directeur générale']],
           'Chef' : [this.services,['Chef de service']],
           'Employé': [this.services,this.fonctions[this.service()]]
           }
    return grades[this.profession.grade][1] ;
  }

  service(){
    this.profession.nomService ;
    return this.profession.nomService  ;
  }

  getGrade(){
    let grades = {'Directeur' : [this.branche,['Directeur générale']],
           'Chef' : [this.services,['Chef de service']],
           'Employé': [this.services,this.fonctions[this.service()]]
           }
    return grades[this.profession.grade][0] ;
  }

  addPers(){
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
        },
        (err)=>this.error=err 
      ) ;
      this.visible=false; 
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
  ////////////////check Valide CV file
  checkCV(){
    this.isSelectedCV=true ;
    let files=this.elem.nativeElement.querySelector('#CV').files ;
      let file=files[0] ;
      this.file=file.name ;
      this.extensionCV= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
      if(this.listExtCV.indexOf(this.extensionCV) >= 0){
          this.isInCV=true ;
      }   
      else{
        this.isInCV=false ;
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

  onAddDiplome(i){
    this.formBuilder.control('',Validators.required) ;
    console.log('salamapoilu') ;
  }

  addInfo(){
    console.log('salama') ;
  }
}
  


