import { Diplome } from './diplome.model';

export class Professionnal{
    idEmp:number ;
    matricule:string ;
    emailProf:string ;
    numProf:string ;
    dateEmbauche:string ;
    nomService:string ;
    fonction:string ;
    grade:string ;
    pathCV:string ;
    diplome: Diplome [] ;
    constructor(){} ;
}