<?php
require 'connect.php' ;
$oldLink = ($_GET['oldLink'] !== "")? $_GET['oldLink'] : false;
$newLink = ($_GET['newLink'] !== "")? $_GET['newLink'] : false;
$id = ((int)$_GET['id'] !== null) ? (int)$_GET['id'] : false;

            if($oldLink !== "defaultImg.png"){
              unlink("C:/xampp/htdocs/Personnes/assets/images/".$oldLink) ;
            }
            if(isset($_FILES['reavatar']) AND !empty($_FILES['reavatar']['name'])) {            
                        $chemin = "C:/xampp/htdocs/Personnes/assets/images/".$newLink ;
                        $resultat = move_uploaded_file($_FILES['reavatar']['tmp_name'], $chemin) ; 
                      // Update.
                      $msg="Image vohasolo " ;
            $sql = $con->prepare("UPDATE personne SET AVATAR = ? WHERE IDPERS = ? LIMIT 1");
		if ($sql->execute(array($newLink,$id))) {
			http_response_code(204);
		}
		else
		{
			return http_response_code(422);	
    }
      
          }
          else{
            $msg="Non inserer" ;
          }

          echo json_encode(array('data'=>$msg));