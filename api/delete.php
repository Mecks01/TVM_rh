<?php

require 'connect.php';
$personnes = [];
$link ;
// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete Image.
$sqlImg="SELECT * FROM employer WHERE `id` = '{$id}' LIMIT 1 " ;
if($result = mysqli_query($con,$sqlImg))
{
  $pers = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $link = $row['avatar'];
    $pers++;
  }
  if(trim($link) != "defaultImg.png"){
  unlink("C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/$link") ;
}
}

//Delete all from table
$sql = "DELETE FROM `employer` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
?>