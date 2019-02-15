import { Injectable, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpParams} from '@angular/common/http' ;

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators' ;

import {Personne} from '../models/Personne.model' ;

@Injectable({
  providedIn: 'root'
})
export class PersonnesService implements OnInit {
  baseUrl='http://localhost/api' ;
  personnes: Personne [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(){
    
  }
  
  getAll():Observable<Personne[]>{
    return this.http.get(`${this.baseUrl}/list`).pipe(
        map((res)=>{
          debugger
          this.personnes=res['data'] ;
          return this.personnes ;
    }),
    catchError(this.handleError)) ;
  } ;

  private handleError(error :HttpErrorResponse){
    console.log(error) ;
    return throwError('Erreur sur qlq chose.') ; 
  }

getSinglePersonne(id:number) : Observable<Personne>{
  const params=new HttpParams()
  .set('id',id.toString()) ;

  let personne:Personne = new Personne() ;
  return this.http.get(`${this.baseUrl}/singlePersonne`,{params:params})
  .pipe(
      map((res)=>{
        personne=res['data'] ;
        return personne ;
  }),
  catchError(this.handleError)) ;
} 



delete(id:number):Observable<Personne[]>{
  const params=new HttpParams()
  .set('id',id.toString()) ;
  return this.http.delete(`${this.baseUrl}/delete`,{params:params})
  .pipe(
    map(() =>{
    const persfiltred=this.personnes.filter((personne) =>{
      return +personne['id'] !== +id ;
    }) ;
    return this.personnes=persfiltred ;
  }),
  catchError(this.handleError)) ;
}


uploadImage(formdata:any,link:string){
  const params=new HttpParams()
  .set('id',link.toString()) ;
  return this.http.post(`${this.baseUrl}/uploadImg`,formdata,{params:params}) ;
}


 reUploadImage(formdata:any,link:{'oldLink':string , 'newLink':string , 'id':string}){
  return this.http.post(`${this.baseUrl}/reUploadImg`,formdata,{params:link}) ;
}

//Engish date to french
frenchDate(date:string){
  date=date.toString().slice(0,15) ;
  let months= {'Jan':'01','Feb':'02','Mar':'03',
              'Apr':'04','May':'05','Jun':'06',
              'Jul':'07','Aug':'08','Sep':'09',
              'Oct':'10','Nov':'11','Dec':'12'} ;
  let days  =  {'Mon':'Lundi','Tue':'Mardi','Wed':'Mercredi',
              'Thu':'Jeudi','Fri':'Vendredi','Sat':'Samedi',
              'Sun':'Dimanche'}
  let spiltedDate=date.trim().split(' ') ;
  date = (days[spiltedDate[0]] +"  "+ spiltedDate[2] +"/"+ months[spiltedDate[1]] +"/"+ spiltedDate[3]).toString() ;
  return date
}
//////////Update personnes details
update(personne:Personne): Observable<Personne[]>{
  return this.http.put(`${this.baseUrl}/updatePersDetails`,{data : personne})
  .pipe(map((res) => {
    this.personnes.push(res['data']);
    return this.personnes;
  }),
  catchError(this.handleError));
}
/////////store one person
store(personne: Personne): Observable<Personne[]> {
  return this.http.post(`${this.baseUrl}/store`, { data: personne })
    .pipe(map((res) => {
      this.personnes.push(res['data']);
      return this.personnes;
    }),
    catchError(this.handleError));
}
///////////////liste des numTel
getAllNumber():Observable<string[]>{
  return this.http.get(`${this.baseUrl}/getAllNumber`).pipe(
      map((res)=>{
        return res['data'] ;
  }),
  catchError(this.handleError)) ;
} ;

}

