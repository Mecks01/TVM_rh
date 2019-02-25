<?php 
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);
	// Validate.
	if(trim($request->data->idservice) === '' )
	{
		return http_response_code(400);
	} 
	$idProf = (int)$request->data->idEmp; 
    $idService = (int)$request->data->idservice; 
    $nomService = trim($request->data->nomService);
    $fonction = trim($request->data->fonction); 
    $grade = trim($request->data->grade);
     
	$matricule = trim($request->data->matricule); 
	$emailProf = trim($request->data->emailProf); 
    $numProf = trim($request->data->numProf); 
    $dateEmbauche = trim($request->data->dateEmbauche);

    $sql0 = $con->prepare("SELECT IDSERVICE FROM service WHERE FONCTION = ? AND NOMSERV = ? AND GRADE = ?");
		if($sql0->execute(array($fonction,$nomService,$grade))) 
		{
			$row = $sql0->fetch(PDO::FETCH_ASSOC);
			$serv = $row['IDSERVICE'];
        }
        
        if (!isset($serv)){
			$sql = $con->prepare("INSERT INTO service(NOMSERV,FONCTION,GRADE) VALUES (?,?,?)") ;
			$sql->execute(array($nomService,$fonction,$grade)) ;
			$serv = $con->lastInsertId();
		}

	$sql = $con->prepare("UPDATE infoprof AS info
                          SET IDSERVICE=?,MATRICULE=?,EMAILPROF=?,NUMPROF=?,DATEEMBAUCHE=? WHERE info.IDSERVICE=? AND info.IDPROF=? LIMIT 1");
	$table = array($serv,$matricule,$emailProf,$numProf,$dateEmbauche,$idService,$idProf);
	
	if($sql->execute($table))
	{
		http_response_code(201);
        
	}
	else
	{
		http_response_code(422);
	}
}
 ?>