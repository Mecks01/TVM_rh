<?php
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if(trim($request->data->nom) === '' || trim($request->data->numTel === ''))
  {
    return http_response_code(400);
  }
 $nom = mysqli_real_escape_string($con, trim($request->data->nom)) ;
 $prenom = mysqli_real_escape_string($con, trim($request->data->prenom));
 $civilite = mysqli_real_escape_string($con, trim($request->data->civilite));
 $dateNaissance = mysqli_real_escape_string($con, trim($request->data->dateNaissance));
 $adresse = mysqli_real_escape_string($con, trim($request->data->adresse));
 $numTel = mysqli_real_escape_string($con, trim($request->data->numTel));
 $email = mysqli_real_escape_string($con, trim($request->data->email));
 $image = mysqli_real_escape_string($con, trim($request->data->image));
 $password = mysqli_real_escape_string($con, trim($request->data->password));
 $nationalite = mysqli_real_escape_string($con, trim($request->data->nationalite));
 $nbEnfants =(int)mysqli_real_escape_string($con, trim($request->data->nbEnfants));


$passwordHashed = password_hash($password, PASSWORD_DEFAULT);
//////////////////////////////////////////////////////////////////////////

//store
$sql = "INSERT INTO `personne` (`NOMPERS`,`PRENOMPERS`,`CIVILITE`,`DATENAISSANCE`,`ADRESSEPERS`,`NUMPERS`,`EMAILPERS`,`AVATAR`,`PASSWORD`,`NATIONALITE`,`NBENFANTS`)
 VALUES ('{$nom}','{$prenom}','{$civilite}','{$dateNaissance}','{$adresse}','{$numTel}','{$email}','{$image}','{$passwordHashed}','{$nationalite}','{$nbEnfants}')";

  if(mysqli_query($con,$sql))
  {
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
      'id'    => mysqli_insert_id($con)
    ] ;
    echo json_encode(['data'=>$personne]);
  }
  else
  {
    http_response_code(422);
  }
} ;
?>