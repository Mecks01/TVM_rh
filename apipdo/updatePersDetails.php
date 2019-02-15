<?php 
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);

	// Validate.
	if(trim($request->data->nom) === '' || trim($request->data->numTel === ''))
	{
		return http_response_code(400);
	} 
	$id = (int)$request->data->id; 
	$nom = trim($request->data->nom);
	$prenom = trim($request->data->prenom); 
	$numTel = trim($request->data->numTel); 
	$dateNaiss = trim($request->data->dateNaissance); 

	$sql = $con->prepare("UPDATE personne SET NOMPERS=?,PRENOMPERS=?,NUMPERS=?,DATENAISSANCE=? WHERE IDPERS=? LIMIT 1");
	$table = array($nom,$prenom,$numTel,$dateNaiss,$id);
	if($sql->execute($table))
	{
		http_response_code(201);
		$personne = [
			'nom' => $nom,
			'prenom' => $prenom,
			'numTel' => $numTel,
			'dateNaiss' => $dateNaiss,
			'id' => $id
		];
		echo json_encode(['data' => $personne]);
	}
	else
	{
		http_response_code(422);
	}
}
 ?>