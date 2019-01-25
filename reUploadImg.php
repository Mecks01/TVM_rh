<?php
require 'connect.php';

      $oldLien = ($_GET['id'] !== "")? mysqli_real_escape_string($con, $_GET['id']) : false;
      $oldLien=trim($oldLien) ;
      unlink("C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$oldLien) ;
if(isset($_FILES['reavatar']) AND !empty($_FILES['reavatar']['name'])) {
  $tailleMax = 2097152;
  $extensionsValides = array('jpg', 'jpeg', 'gif', 'png');
  $extensionUpload = strtolower(substr(strrchr($_FILES['reavatar']['name'], '.'), 1));
  $newName = strtolower(substr($oldLien,0,strlen($oldLien)-strlen($extensionUpload)-1));
      if($_FILES['reavatar']['size'] <= $tailleMax) {
         if(in_array($extensionUpload, $extensionsValides)) {
            $chemin = "C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$newName.".".$extensionUpload;
            $resultat = move_uploaded_file($_FILES['reavatar']['tmp_name'], $chemin); 
            } 
            else {
               $msg = "Votre photo de profil doit être au format jpg, jpeg, gif ou png";
                  }
            }
          else
           {
     $msg = "Votre photo de profil ne doit pas dépasser 2Mo";
  }
  $name=$newName.".".$extensionUpload ;
  // Update.
  $sql = "UPDATE `employer` SET `avatar`='$name' WHERE `avatar` = '{$oldLien}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}