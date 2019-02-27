import { Component, OnInit, Injectable, ElementRef, TemplateRef } from '@angular/core';
import { Personne } from 'src/app/models/Personne.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnesService } from 'src/app/services/personnes.service';
import swal from 'sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { frLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Professionnal } from 'src/app/models/professional.model';
import { Diplome } from 'src/app/models/diplome.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ProfessionService } from 'src/app/services/profession.service';
import { AuthService } from 'src/app/services/auth.service';
defineLocale('fr',frLocale) ;


@Component({
  selector: 'app-single-personne',
  templateUrl: './single-personne.component.html', 
  styleUrls: ['./single-personne.component.scss']
})
export class SinglePersonneComponent implements OnInit {

  
  
  value: string;
  datePickerConfig : Partial<BsDatepickerConfig> ;
  personne : Personne ;
  profession = new Professionnal('','','','','','','','') ;
  error ='' ;
  success='' ;
  extension='' ;
  isSelected=false ;
  file="" ;
  listExt :string[] = [".jpg",'.png','.gif','.jpeg'] ;
  isIn:boolean ;
  linkImg="" ;
  isClicked:false ;
  modalRef: BsModalRef;
  stringDate:string ;
  stringDateEmb:string ;
  contentArray : Diplome [];
  p: number=1 ;
  DateDebut:any ;
  DateRetour:any ;
  conge : {'idProf':number,'dateDebut':string,'nbJours':string,'dateRetour':string,'motif':string} ;
  conges :{'dateDebut':string,'nbJours':string,'dateRetour':string,'motif':string} [] ;

  userNum=localStorage.getItem('currentUser') ;
  currentUserGrade = localStorage.getItem('currentUserGrade') ;
  
  constructor(private route:ActivatedRoute,
    public personnesService:PersonnesService,
    private router:Router,
    private elem:ElementRef,
    private bsModalService:BsModalService,
    private localeService: BsLocaleService,
    private profService:ProfessionService,
    private auhtService:AuthService) {
      this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat : "DD/MM/YYYY",
      }) ;
      this.localeService.use('fr') ;
     }
  
     onAddConge(f4){
       this.conge.idProf = this.profession.idEmp ;
       this.conge.dateDebut = this.personnesService.frenchDate(this.conge.dateDebut) ;
       this.conge.dateRetour = this.personnesService.frenchDate(this.conge.dateRetour) ;
       this.conges.push(this.conge) ;
       this.profService.addConge(this.conge).subscribe() ;
       f4.reset() ;
       //console.log(this.conge) ;
     }

  ngOnInit() { 
    this.conge = {'idProf':0,'dateDebut':'','nbJours':'','dateRetour':'','motif':''} ;
    this.conges=[] ;
    this.profService.onVerifDirecteur('Directeur','TVM') ;
    this.profService.fullChef() ;
    this.profService.selectedChefExists=[] ;
    this.personne = new Personne() ;  
    const id=this.route.snapshot.params['id'] ;
    this.contentArray = [] ;

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

    this.profService.getSinglePersonneProf(+id).subscribe(
      (res: Professionnal) => {
        this.profession = res;
        this.contentArray =res.diplome;
        this.stringDateEmb = res.dateEmbauche ;
        this.conges = res.conges ;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  
///////////////////////
onSelect(data: TabDirective): void {
  this.value = data.heading;
}

//////////////////////////////suppression personne
  onDeletePersonne(){
        swal({
          title:"Confirmation Suppression !?",
          text:"Vous voulez vraiment supprimer l'employé : " + this.personne.nom,
          type:"warning",
          showCancelButton:true ,
          confirmButtonColor: '#DD6B55',
          cancelButtonText: "Non, Annuler!" ,
          confirmButtonText: 'Oui, Supprimer!'
         
        }).then(val =>{
            if(val.value==true){
                  this.personnesService.delete(this.personne.id)
                       .subscribe(
                       (res:Personne[]) =>{
                         this.personnesService.personnes =res ;
                        },
                        (err) => this.error=err) ;
                        if(this.personne.id == +localStorage.getItem('currentUser')){
                          this.auhtService.logout() ;
                        }
                        else{
                          this.router.navigate(['/Personnes']) ;
                        }   
                          window.location.reload() ; 
            }
        })
        ;
  }
  //////////Changement avatar
  onChangeProfil():void{
    swal({
      title:"Nouvelle photo de profil ajouté!",
      text:"Votre photo de profil est à jour !",
      type:"success"}).then(val =>{
        if(val.value == true){
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
      window.location.reload() ;
        }
      }) ;
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
    onUpdateProf(templateProf: TemplateRef<any>){
      this.profService.nomService=this.profession.nomService ;
      this.modalRef = this.bsModalService.show(templateProf,{ class: 'container' });
  }

      updatePersDetails(f){
        this.personne.nom=this.personne.nom.toUpperCase() ;
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
            //window.location.reload() ;
          },
          (err)=>this.error=err 
        ) ;
        this.modalRef.hide() ;
        window.location.reload() ;
      }


onViewCV(){
  if(this.profession.pathCV != 'Pas de CV'){
    window.open('assets/fichiers/' + this.profession.pathCV) ;
    window.close ;
    swal('CV téléchargé',"Ouvrir le fichier pour voir le contenu") ;
  }
  else{
    swal('Pas de CV',"Cette employé n'a pas de CV!") ;
  }
}

updatePersDetailsProf(){
  if(this.profession.dateEmbauche == this.stringDateEmb.toString()){
    this.profession.dateEmbauche = this.stringDateEmb.toString() ;
  }
  else{
  this.profession.dateEmbauche = this.personnesService.frenchDate(this.stringDateEmb.toString()) ;
  }
  this.profService.updateProf(this.profession).subscribe(
    (res)=>{
      //Mis a jour liste pers
      //reset the form
      window.location.reload() ;
    },
    (err)=>this.error=err 
  ) ;
  this.modalRef.hide() ;
}

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

onUpdateCV(){
  swal({
    title:"Nouveau CV enregistré !",
    text:"Votre CV est à jour !",
    type:"success"}).then(val =>{
      if(val.value == true){
  let files=this.elem.nativeElement.querySelector('#CV').files ;
  let formData= new FormData() ;
  let file=files[0] ;
  this.profService.extensionCV= ((file.name).substring((file.name).lastIndexOf('.'))).toLowerCase() ;
  let oldLink=this.profession.pathCV.trim() ;
  let newLink=this.profession.matricule +"_CV" + this.profService.extensionCV ;
  this.file=file.name ;
  formData.append('CV',file,file.name) ;
  let listLink ={'oldLink':oldLink ,'newLink':newLink,'id':this.profession.idEmp.toString()} ;
  this.profService.reUploadCV(formData,listLink).subscribe() ;
}
    }) ;
  }

}
