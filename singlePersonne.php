<?php
/**
 * Returns one pers.
 */
require 'connect.php';

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;
$personne = [];

$sql="SELECT * FROM employer WHERE `id` = '{$id}' LIMIT 1 " ;

if($result = mysqli_query($con,$sql))
{
  while($row = mysqli_fetch_assoc($result))
  {
    $personne['id']    = $row['id'];
    $personne['nom']    = $row['Nompers'];
    $personne['prenom'] = $row['Prenompers'];
    $personne['numTel'] = $row['numPers'];
    $personne['image'] = $row['avatar'];
  }
    
  echo json_encode(['data'=>$personne]);
}
else
{
  http_response_code(404);
}
?>