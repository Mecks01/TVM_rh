import { Injectable, TemplateRef, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService, BsLocaleService } from 'ngx-bootstrap';
import { Professionnal } from '../models/professional.model';
import { Diplome } from '../models/diplome.model';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  error:string ;
  nbChef:number=0 ;
  isFullChef:boolean ;
  selectedChefExists:boolean[] ;
  existDirecteur:boolean ;
  nomService='' ;
  isSelectedCV=false ;
  listExtCV:string[] = [".doc",".pdf",".html"] ;
  extensionCV:string ;
  file="" ;
  isInCV:boolean ;
  
  degrees : string [] = ['BEPC','Bacc','Licence','Master','Doctorat'] ;
  mentions : string [] = ['Excellent','Très bien','Bien','Assez bien','Passable'] ;
  existDiplome=false ;
  services = ['Informatique','Technique','Programmation','Production','Information'] ;
  branche = ['TVM'] ;
  fonctions = {
                'Informatique':['ADSL','Monteur','Programme','Réseaux','Développeur Web'],
                'Technique':['Technicien','Journaliste','Endineer'],
                'Programmation': ['aaaaa','bbbbb','ccccc'],
                'Production':['ttttty','eeeeee','zzzzz'],
                'Information' :['yyyy','ggggg','nnnnnnn']
              } ;
  
  baseUrl='http://localhost/api' ;

  constructor(
    private router:Router,
    private http:HttpClient) { }
    

    private handleError(error :HttpErrorResponse){
      console.log(error) ;
      return throwError('Erreur sur qlq chose.') ; 
    }

  getService(grade){
    let grades = {'Directeur' : [this.branche,['Directeur générale']],
           'Chef' : [this.services,['Chef de service']],
           'Employé': [this.services,this.fonctions[this.nomService]],
           'Stagiaire': [this.services,this.fonctions[this.nomService]]
           }
    return grades[grade][1] ;
  }

  service(nService:string){
     this.nomService=nService  ;
  }

  getGrade(grade:string){
    let grades = {'Directeur' : [this.branche,['Directeur générale']],
           'Chef' : [this.services,['Chef de service']],
           'Employé': [this.services,this.fonctions[this.nomService]],
           'Stagiaire': [this.services,this.fonctions[this.nomService]]
           }
    return grades[grade][0] ;
  }

  /////////////verification Compte directeur
  onVerifDirecteur(grade:string,nomService:string){
    this.onVerifGrad(grade,nomService).subscribe(
      (res:string) =>{
        if(res=='200'){
          this.existDirecteur=true ;
        }
        else if (res='300'){
          this.existDirecteur=false ;
        }
      },
      (err) => {
        this.error = err;
      }
    );
  }
/////////////verification Compte chefs
 verifChef(grade){
  if(grade == "Chef"){
    for (let i = 0; i < this.services.length; i++) {
      this.onVerifGrad("Chef",this.services[i]).subscribe(
        (res:string) =>{
          if(res=='200'){
            this.selectedChefExists[i]=true ;
          }
          else if (res='300'){
            this.selectedChefExists[i]=false ;
          }
        },
        (err) => {
          this.error = err;
        }
      ); ;
      
    }
  }
  else {
    this.selectedChefExists=[] ;
  }
 }  ;
 /////////////poste chef full
 fullChef(){
  for (let i = 0; i < this.services.length; i++) {
    this.onVerifGrad("Chef",this.services[i]).subscribe(
      (res:string) =>{
        
        if(res=='200'){
          this.nbChef++ ;
      
        }
        if(this.nbChef== this.services.length){
          this.isFullChef=true ;
         
        }
       
      },
      (err) => {
        this.error = err;
      }
    ); ; 
  }
 }

 getSinglePersonneProf(id:number) : Observable<Professionnal>{
      const params=new HttpParams()
      .set('id',id.toString()) ;

      let profession:Professionnal ;
      return this.http.get(`${this.baseUrl}/singlePersonneProf`,{params:params})
      .pipe(
          map((res)=>{
            profession=res['data'] ;
            profession.diplome=res['diplomes'] ;
            profession.conges=res['conges'] ;
            return profession ;
      }),
      catchError(this.handleError)) ;
}
/////////////verification Compte chef et directeur
onVerifGrad(grade:string,nomService:string):Observable<string>{
  let profession= new Professionnal('','','','',nomService,'',grade,'') ;
return this.http.post(`${this.baseUrl}/verifGrad`,{data: profession})
.pipe(
    map((res)=>{
      return res['status'].toString() ;
}),
catchError(this.handleError)) ;
}


//////////////////////sendProfessionnal INfo
sendInfo(infoProf: Professionnal){
  
  return this.http.post(`${this.baseUrl}/storeProf`, { data: infoProf })
  .pipe(map((res) => {
   //this.currentId = res['data']['idEmp'] ;
  }),
  catchError(this.handleError));
}


                  ///////////////////////////upload CV
uploadCV(formdata:any, pathCV:string){
  const params=new HttpParams()
  .set('id',pathCV.toString()) ;
  return this.http.post(`${this.baseUrl}/uploadCV`,formdata,{params:params}) ;
  }

  updateProf(profession:Professionnal){
    profession.diplome=[] ;
    console.log(profession) ;
    return this.http.put(`${this.baseUrl}/updateProfDetails`,{data : profession})
  .pipe(map((res) => {
  }),
  catchError(this.handleError));
  }

  reUploadCV(formdata:any,link:{'oldLink':string , 'newLink':string , 'id':string}){
    return this.http.post(`${this.baseUrl}/reUploadCV`,formdata,{params:link}) ;
  }

  addConge(conge : {'idProf':number,'dateDebut':string,'nbJours':string,'dateRetour':string,'motif':string}){
    return this.http.post(`${this.baseUrl}/addConge`, { data: conge })
    .pipe(map((res) => {
     //this.currentId = res['data']['idEmp'] ;
    }),
    catchError(this.handleError));
  }

}
