<?php
/**
 * Returns the list of pers.
 */
require 'connect.php';
$numbers = [];
$sql = "SELECT NUMPERS FROM personne";

if($result = mysqli_query($con,$sql))
{
  $pers = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $numbers[$pers] = $row['NUMPERS']; 
    $pers++;
  }
    
   echo json_encode(['data'=>$numbers]);
}
else
{
  http_response_code(404);
}
?>