import { Diplome } from './diplome.model';

export class Professionnal{
    idEmp:number ;
    
        constructor(public  matricule:string ,
                    public  emailProf:string ,
                    public  numProf:string ,
                    public  dateEmbauche:string, 
                    public  nomService:string ,
                    public  fonction:string ,
                    public  grade:string ,
                    public  pathCV:string ,
                    public  diplome ?: Diplome [] 
                    ) {} ;
}