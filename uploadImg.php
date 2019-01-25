<?php
require 'connect.php';

$lien = ($_GET['id'] !== "")? mysqli_real_escape_string($con, $_GET['id']) : false;
if(isset($_FILES['avatar']) AND !empty($_FILES['avatar']['name'])) {
  $tailleMax = 2097152;
  $extensionsValides = array('jpg', 'jpeg', 'gif', 'png');
  $extensionUpload = strtolower(substr(strrchr($_FILES['avatar']['name'], '.'), 1));
  if($_FILES['avatar']['size'] <= $tailleMax) {
     if(in_array($extensionUpload, $extensionsValides)) {
       $chemin = "C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$lien ;
       $resultat = move_uploaded_file($_FILES['avatar']['tmp_name'], $chemin);  
     } 
     else {
        $msg = "Votre photo de profil doit être au format jpg, jpeg, gif ou png";
     }
  } else {
     $msg = "Votre photo de profil ne doit pas dépasser 2Mo";
  }
}