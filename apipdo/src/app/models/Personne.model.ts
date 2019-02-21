import { Professionnal } from './professional.model';

export class Personne{
   
     id:number
     nom:string 
     prenom:string
     nationalite:string
     dateNaissance:string 
     adresse:string ;
     province:string ;
     numTel:string
     email:string ;
     password:string ;
     civilite:string ;
     nbEnfants:number ;
     image:string ;
     genre:string ;
     professionnel: Professionnal ;
    constructor( ){}
}