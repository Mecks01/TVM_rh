<?php
require 'connect.php';

$pathCV = ($_GET['id'] !== "")? $_GET['id'] : false;
if(isset($_FILES['CV']) AND !empty($_FILES['CV']['name'])) {
  $tailleMax = 2097152;
  if($_FILES['CV']['size'] <= $tailleMax) {
       $chemin = "C:/xampp/htdocs/Personnes/assets/fichiers/".$pathCV ;
       $resultat = move_uploaded_file($_FILES['CV']['tmp_name'], $chemin);  
      } 
   else {
     $msg = "Votre CV ne doit pas dépasser 2Mo";
  }
}