<?php
require 'connect.php';
$oldLink = ($_GET['oldLink'] !== "")? mysqli_real_escape_string($con,$_GET['oldLink']) : false;
$newLink = ($_GET['newLink'] !== "")? mysqli_real_escape_string($con,$_GET['newLink']) : false;
$id = ((int)$_GET['id'] !== null) ? mysqli_real_escape_string($con,(int)$_GET['id']) : false;

      if($oldLink !== "defaultImg.png"){
        unlink("C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$oldLink) ;
      }
            if(isset($_FILES['reavatar']) AND !empty($_FILES['reavatar']['name'])) {
              $tailleMax = 2097152;
                  if($_FILES['reavatar']['size'] <= $tailleMax) {
                        $chemin = "C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/".$newLink ;
                        $resultat = move_uploaded_file($_FILES['reavatar']['tmp_name'], $chemin) ; 
                        }
                      else
                      {
                          $msg = "Votre photo de profil ne doit pas dépasser 2Mo";
                      }
                      // Update.
            $sql = "UPDATE `employer` SET `avatar`='$newLink' WHERE `id` = '{$id}' LIMIT 1";

            if(mysqli_query($con, $sql))
            {
              http_response_code(204);
            }
            else
            {
              return http_response_code(422);
            }  
          }