import { Diplome } from './diplome.model';

export class Professionnal{
    idEmp:number ;
    conges : {'idProf':number,'dateDebut':string,'nbJours':string,'dateRetour':string,'motif':string} [];
    
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