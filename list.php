<?php
/**
 * Returns the list of pers.
 */
require 'connect.php';
$personnes = [];
$sql = "SELECT * FROM employer";

if($result = mysqli_query($con,$sql))
{
  $pers = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $personnes[$pers]['id']    = $row['id'];
    $personnes[$pers]['nom']    = $row['Nompers'];
    $personnes[$pers]['prenom'] = $row['Prenompers'];
    $personnes[$pers]['numTel'] = $row['numPers'];
    $personnes[$pers]['image'] = $row['avatar'];
    $pers++;
  }
    
  echo json_encode(['data'=>$personnes]);
}
else
{
  http_response_code(404);
}
?>