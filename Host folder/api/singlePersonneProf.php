<?php 
require 'connect.php';
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? (int)$_GET['id'] : false;
$profession = [];
$sql=$con->prepare("SELECT * FROM (infoprof AS info INNER JOIN service AS serv ON info.IDSERVICE=serv.IDSERVICE) 
                     WHERE info.IDPROF = ? ") ;
if ($result = $sql->execute(array($id))) {
     $row = $sql->fetch(PDO::FETCH_ASSOC) ;
     
     $profession['idEmp'] = $row['IDPROF'];
     $profession['idservice'] = $row['IDSERVICE'];
     $profession['matricule'] = $row['MATRICULE'];
     $profession['emailProf'] = $row['EMAILPROF'];
     $profession['numProf'] = $row['NUMPROF'];
     $profession['dateEmbauche'] = $row['DATEEMBAUCHE'];
     $profession['pathCV'] = $row['PATHCV'];
     $profession['nomService'] = $row['NOMSERV'];
     $profession['fonction'] = $row['FONCTION'];
     $profession['grade'] = $row['GRADE'];
}	
else
{
	http_response_code(404);
} ;

$sql1=$con->prepare("SELECT * FROM DIPLOME WHERE IDPROF= ?") ;

if ($result = $sql1->execute(array($id))) {
$diplomes=[] ;
$i=0 ;
    while($row = $sql1->fetch(PDO::FETCH_ASSOC)){
        $diplomes[$i]['degree'] = $row['DEGREE'];
        $diplomes[$i]['mention'] = $row['MENTION'];
        $diplomes[$i]['filiere'] = $row['FILIERE'];
        $diplomes[$i]['nomInstitution'] = $row['NOMINSTITUTION'];
        $i++ ;
    }
}
else
{
	http_response_code(404);
} ;


$sql1=$con->prepare("SELECT * FROM conge WHERE IDPROF= ?") ;

if ($result = $sql1->execute(array($id))) {
$conges=[] ;
$i=0 ;
    while($row = $sql1->fetch(PDO::FETCH_ASSOC)){
        $conges[$i]['dateDebut'] = $row['DATEDEBUT'];
        $conges[$i]['nbJours'] = $row['NBJOUR'];
        $conges[$i]['dateRetour'] = $row['DATERETOUR'];
        $conges[$i]['motif'] = $row['MOTIF'];
        $i++ ;
    }
}
else
{
	http_response_code(404);
} ;

	echo json_encode(array('data'=>$profession,'diplomes' => $diplomes,'conges' => $conges));
    

 ?>