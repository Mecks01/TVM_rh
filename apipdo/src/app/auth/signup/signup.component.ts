import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';
import { Personne } from 'src/app/models/Personne.model';
import { PersonnesService } from 'src/app/services/personnes.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {BsDatepickerConfig, BsLocaleService} from 'ngx-bootstrap/datepicker' ;
import { frLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { Professionnal } from 'src/app/models/professional.model';
import { Diplome } from 'src/app/models/diplome.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfessionService } from 'src/app/services/profession.service';
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
  file='' ;
  success='' ;
  selectedFile:File= null ;
  extension:string ;
  personne =new Personne() ;
  isSelected=false ;
  listExt :string[] = [".jpg",'.png','.gif','.jpeg'] ;
  isIn:boolean ;
  stringDate:string ;
  numbers:string[];
  existingNumber:boolean ;
  prov="Antananarivo" ;
  visible:string ;
  degree:string ; 
  nomImg:"" ;
  

  ///////////Variable professionnal data
  profession=new Professionnal('','','','','','','','') ;
  modalRef: BsModalRef;
  diplome1: Diplome ;
  

  constructor(private personnesService: PersonnesService,
    private profService:ProfessionService,
    private router:Router,
    private elem:ElementRef,
    private localeService: BsLocaleService,
    private bsModalService:BsModalService
    ) { 
      this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat : "DD/MM/YYYY",
      }) ;
      this.localeService.use('fr') ;
    }

  ngOnInit() {
    this.visible=localStorage.getItem('state') ;
    this.personne.nationalite="Malagasy" ;
    this.personne.civilite="Célibataire" ;
    this.profession.nomService="Choisir service" ;
    this.profession.fonction="Choisir fonction" ;
    this.profService.nomService="Choisir fonction" ;
    this.profession.grade="Employé" ;
    this.profession.diplome=[] ;
    this.personne.genre="Homme" ;
    this.personne.nbEnfants=0;
    this.degree="Master" ;
    this.profService.onVerifDirecteur('Directeur','TVM') ;
    this.profService.fullChef() ;
    this.profService.selectedChefExists=[] ;
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
      this.personne.province = this.prov ;
      // this.personne.nom=this.personne.nom.toUpperCase() ;
      this.personne.dateNaissance=this.personnesService.frenchDate(this.stringDate) ;
      this.personnesService.store(this.personne)
      .subscribe(
        (res:Personne[])=>{
          //Mis a jour liste pers
          this.personnesService.personnes=res ;
        },
        (err)=>this.error=err 
      ) ;
      this.stringDate="" ;
      this.visible='false'; 
      localStorage.setItem('state',this.visible) ;
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
      this.nomImg=file.name ;
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
        if(exist === -1){
          this.existingNumber=false ;
        }
        else{
          this.existingNumber=true ;
        }
      },
      (err) => {
        this.error = err;
      }
    )
  }
/////add Diplome
  onAddDiplome(template: TemplateRef<any>){
    this.diplome1=new Diplome('Master','','Assez bien','') ;
    this.modalRef = this.bsModalService.show(template,{ class: 'container' });
  }
////push diplome
  addThisDiplome(){
    this.profession.diplome.push(this.diplome1) ;
    this.modalRef.hide() ;
  }

  addInfo(){
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
    this.profession.idEmp = +localStorage.getItem('idEmp') ;
    this.profession.pathCV = this.selectingCV(this.profession.matricule) ;
      //Store profession
    this.profession.dateEmbauche = this.personnesService.frenchDate(this.stringDate) ;
    this.profService.sendInfo(this.profession).subscribe() ;
    localStorage.removeItem('state') ;
    localStorage.removeItem('idEmp') ;
    if (!localStorage.getItem('currentUser')) {  
      localStorage.setItem('currentUser',this.profession.idEmp.toString()) ;
      localStorage.setItem('currentUserGrade',this.profession.grade);
      localStorage.setItem('currentUserService',this.profession.nomService);
    }
    this.router.navigate(['/Personnes']) ;
    window.location.reload() ;
      }
    } ) ;


  }
  
  //upload CV ;
  selectingCV(matricule:string){
    if(this.profService.isSelectedCV == true){
      let files=this.elem.nativeElement.querySelector('#CV').files ;
      let formData= new FormData() ;
      let file=files[0] ; 
      formData.append('CV',file,file.name) ;
      var pathCV = matricule +"_CV" + this.profService.extensionCV ;
      this.profService.uploadCV(formData,pathCV).subscribe() ;
      }
      else{
           pathCV = "Pas de CV" ;
      }
      return pathCV ;
    }

    ////////////////check Valide CV file
checkCV(){
  this.profService.isSelectedCV=true ;
  let files=this.elem.nativeElement.querySelector('#CV').files ;
    let file=files[0] ;
    this.file=file.name ;
    console.log(file.size)
    this.profService.extensionCV= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
    if(this.profService.listExtCV.indexOf(this.profService.extensionCV) >= 0){
        this.profService.isInCV=true ;
    }   
    else{
      this.profService.isInCV=false ;
    }
}

  
}
  


