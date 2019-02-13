<?php 
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);
	
	// Validate.
	if (trim($request->data->nom) === '' || trim($request->data->numTel) === '') {
		return http_response_code(400);
	}
	$nom = trim($request->data->nom);
	$prenom = trim($request->data->prenom);
	$civilite = trim($request->data->civilite);
	$dateNaissance = trim($request->data->dateNaissance);
	$adresse = trim($request->data->adresse);
	$numTel = trim($request->data->numTel);
	$email = trim($request->data->email);
	$image = trim($request->data->image);
	$password = sha1($request->data->password) ;
	$nationalite = trim($request->data->nationalite);
	$nbEnfants = (int)($request->data->nbEnfants);

	// store

	$sql = $con->prepare("INSERT INTO personne(NOMPERS,PRENOMPERS,CIVILITE,DATENAISSANCE,ADRESSEPERS,NUMPERS,EMAILPERS,AVATAR,PASSWORD,NATIONALITE,NBENFANTS) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
	$table = array($nom,$prenom,$civilite,$dateNaissance,$adresse,$numTel,$email,$image,$password,$nationalite,$nbEnfants);
	if ($sql->execute($table)){
			http_response_code(201);
			$personne = [
	  'nom' => $nom,
      'prenom' => $prenom,
      'civilite' => $civilite,
      'dateNaissance' => $dateNaissance,
      'adresse' => $adresse,
      'numTel' => $numTel,
      'email' => $email,
      'image' => $image,
      'password' => $password,
      'nationalite' => $nationalite,
      'nbEnfants' => $nbEnfants,
	  'id' => $sql->lastInsertId()
			];
	echo json_encode(['data'=>$personne]);
	}
	else
	{
		http_response_code(422);
	}
}
 ?>
