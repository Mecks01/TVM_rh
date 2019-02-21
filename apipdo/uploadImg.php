<?php 
require 'connect.php';
$lien = ($_GET['id'] !== "")? $_GET['id'] : false;
if(isset($_FILES['avatar']) AND !empty($_FILES['avatar']['name'])) {
  $tailleMax = 12097152;
  if($_FILES['avatar']['size'] <= $tailleMax) {
       $chemin = "C:/Users/Hp 123/Desktop/Angular/src/assets/images/".$lien ;
       $resultat = move_uploaded_file($_FILES['avatar']['tmp_name'], $chemin);  
      } 
   else {
     $msg = "Votre photo de profil ne doit pas dépasser 10Mo";
     $erreur = ['msg' => $msg] ;
     echo json_encode(['data'=> $erreur]);
  }
}