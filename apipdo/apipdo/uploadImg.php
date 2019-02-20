<?php 
require 'connect.php';
$lien = ($_GET['id'] !== "")? $_GET['id'] : false;
if(isset($_FILES['avatar']) AND !empty($_FILES['avatar']['name'])) {
  $tailleMax = 2097152;
  if($_FILES['avatar']['size'] <= $tailleMax) {
       $chemin = "C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$lien ;
       $resultat = move_uploaded_file($_FILES['avatar']['tmp_name'], $chemin);  
      } 
   else {
     $msg = "Votre photo de profil ne doit pas dépasser 2Mo";
  }
}