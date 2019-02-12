<?php
/**
 * Returns the list of pers.
 */
require 'connect.php';
$personnes = [];
$sql = "SELECT * FROM personne";

if($result = mysqli_query($con,$sql))
{
  $pers = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $personnes[$pers]['id']    = $row['IDPERS'];
    $personnes[$pers]['nom']    = $row['NOMPERS'];
    $personnes[$pers]['prenom'] = $row['PRENOMPERS'];
    $personnes[$pers]['civilite'] = $row['CIVILITE'];
    $personnes[$pers]['datenaissance'] = $row['DATENAISSANCE'];
    $personnes[$pers]['adresse'] = $row['ADRESSEPERS'];
    $personnes[$pers]['numTel'] = $row['NUMPERS'];
    $personnes[$pers]['email'] = $row['EMAILPERS'];
    $personnes[$pers]['image'] = $row['AVATAR'];
    $personnes[$pers]['nationalite'] = $row['NATIONALITE'];
    $pers++;
  }
    
   echo json_encode(['data'=>$personnes]);
}
else
{
  http_response_code(404);
}
?>