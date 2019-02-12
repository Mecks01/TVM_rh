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
$id = mysqli_real_escape_string($con, trim($request->data->id));
$nom = mysqli_real_escape_string($con, trim($request->data->nom));
$prenom = mysqli_real_escape_string($con, trim($request->data->prenom));
$numTel = mysqli_real_escape_string($con, trim($request->data->numTel));
$dateNaiss = mysqli_real_escape_string($con, trim($request->data->dateNaissance));

//////////////////////////////////////////////////////////////////////////

//update
$sql = "UPDATE `employer` SET `Nompers`='$nom',`Prenompers`='$prenom',`numPers`='$numTel',`dateNaiss`='$dateNaiss' WHERE `id` = '{$id}' LIMIT 1";
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $personne = [
      'nom' => $nom,
      'prenom' => $prenom,
      'numTel' => $numTel,
      'dateNaiss' => $dateNaiss,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$personne]);
  }
  else
  {
    http_response_code(422);
  }
} ;
?>