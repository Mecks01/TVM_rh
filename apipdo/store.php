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
	if (/*trim($request->data->nom) === '' ||*/ trim($request->data->numTel) === '') {
		return http_response_code(400);
	}
	$p1 = new Personne();
	$p1->setNom($request->data->nom);
	$p1->setPrenom($request->data->prenom);
	$p1->civilite = trim($request->data->civilite);
	$p1->dateNaissance = trim($request->data->dateNaissance);
	$p1->adresse = trim($request->data->adresse);
	$p1->numTel = trim($request->data->numTel);
	$p1->email = trim($request->data->email);
	$p1->image = trim($request->data->image);
	$p1->setPassword($request->data->password) ;
  $p1->nationalite = trim($request->data->nationalite);
  $p1->province = trim($request->data->province);
	$p1->nbEnfants = (int)($request->data->nbEnfants);
	$p1->genre = ($request->data->genre);
	// store
	$sql = $con->prepare("INSERT INTO personne(NOMPERS,PRENOMPERS,CIVILITE,DATENAISSANCE,ADRESSEPERS,NUMPERS,EMAILPERS,AVATAR,PASSWORD,NATIONALITE,NBENFANTS,PROVINCE,GENRE) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
	$table = array($p1->getNom(),$p1->getPrenom(),$p1->civilite,$p1->dateNaissance,$p1->adresse,$p1->numTel,$p1->email,$p1->image,$p1->getPassword(),$p1->nationalite,$p1->nbEnfants,$p1->province,$p1->genre);
	if ($sql->execute($table)){
			http_response_code(201);
			$personne = [
	    'nom' => $p1->getNom(),
      'prenom' => $p1->getPrenom(),
      'civilite' => $p1->civilite,
      'dateNaissance' => $p1->dateNaissance,
      'adresse' => $p1->adresse,
      'numTel' => $p1->numTel,
      'email' => $p1->email,
      'image' => $p1->image,
      'password' => $p1->getPassword(),
      'nationalite' => $p1->nationalite,
	  'nbEnfants' => $p1->nbEnfants,
	  'genre' => $p1->genre,
	    'id' => $con->lastInsertId()
			];
	echo json_encode(['data'=>$personne]);
	}
	else
	{
		http_response_code(422);
	}
}
 ?>