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
	$dateNaissance = trim($request->data->dateNaissance); 
	$civilite = trim($request->data->civilite); 
	$email = trim($request->data->email); 
	$adresse = trim($request->data->adresse);
	$nationalite = trim($request->data->nationalite);
	$province = trim($request->data->province);
	$nbEnfants=(int)trim($request->data->nbEnfants);    
	$genre = trim($request->data->genre);

	$sql = $con->prepare("UPDATE personne SET NOMPERS=?,PRENOMPERS=?,NUMPERS=?,
											  DATENAISSANCE=?,CIVILITE=?,EMAILPERS=?,ADRESSEPERS=?,
											  NATIONALITE=?,PROVINCE=?,NBENFANTS=?,GENRE=? WHERE IDPERS=? LIMIT 1");
	$table = array($nom,$prenom,$numTel,$dateNaissance,$civilite,$email,$adresse,$nationalite,$province,$nbEnfants,$genre,$id);
	
	if($sql->execute($table))
	{
		http_response_code(201);
		$personne = [
			'nom' => $nom,
			'prenom' => $prenom,
			'numTel' => $numTel,
			'dateNaissance' => $dateNaissance,
			'civilite' => $civilite,
			'email' => $email,
			'adresse' => $adresse,
			'nationalite' => $nationalite,
			'province' => $province,
			'nbEnfants' => $nbEnfants,
			'genre' => $genre,
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