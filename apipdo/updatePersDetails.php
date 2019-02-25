<?php 
namespace apipdo;
require 'connect.php';
require_once 'personne.php'; 
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
	$p1 = new Personne();
	$p1->id = (int)$request->data->id; 
	$p1->setNom($request->data->nom);
	$p1->setPrenom($request->data->prenom); 
	$p1->numTel = trim($request->data->numTel); 
	$p1->dateNaissance = trim($request->data->dateNaissance); 
	$p1->civilite = trim($request->data->civilite); 
	$p1->email = trim($request->data->email); 
	$p1->adresse = trim($request->data->adresse);
	$p1->nationalite = trim($request->data->nationalite);
	$p1->province = trim($request->data->province);
	$p1->nbEnfants=(int)trim($request->data->nbEnfants);    
	$p1->genre = trim($request->data->genre);

	$sql = $con->prepare("UPDATE personne SET NOMPERS=?,PRENOMPERS=?,NUMPERS=?,
											  DATENAISSANCE=?,CIVILITE=?,EMAILPERS=?,ADRESSEPERS=?,
											  NATIONALITE=?,PROVINCE=?,NBENFANTS=?,GENRE=? WHERE IDPERS=? LIMIT 1");
	$table = array($p1->getNom(),$p1->getPrenom(),$p1->numTel,$p1->dateNaissance,$p1->civilite,$p1->email,$p1->adresse,$p1->nationalite,$p1->province,$p1->nbEnfants,$p1->genre,$p1->id);
	
	if($sql->execute($table))
	{
		http_response_code(201);
		$personne = [
			'nom' => $p1->getNom(),
			'prenom' => $p1->getPrenom(),
			'numTel' => $p1->numTel,
			'dateNaissance' => $p1->dateNaissance,
			'civilite' => $p1->civilite,
			'email' => $p1->email,
			'adresse' => $p1->adresse,
			'nationalite' => $p1->nationalite,
			'province' => $p1->province,
			'nbEnfants' => $p1->nbEnfants,
			'genre' => $p1->genre,
			'id' => $p1->id
		];
		echo json_encode(['data' => $personne]);
	}
	else
	{
		http_response_code(422);
	}
}
 ?>