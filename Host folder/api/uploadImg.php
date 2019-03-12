<?php 
require 'connect.php';
$lien = ($_GET['id'] !== "")? $_GET['id'] : false;
if(isset($_FILES['avatar']) AND !empty($_FILES['avatar']['name'])) {
       $chemin = "C:/xampp/htdocs/Personnes/assets/images/".$lien ;
       $resultat = move_uploaded_file($_FILES['avatar']['tmp_name'], $chemin);  
       $msg="Image inserer " ;
      } 
   else {
     $msg = "Non inserer";
  }
  echo json_encode(['message'=>$msg]) ;
