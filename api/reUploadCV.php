<?php
require 'connect.php' ;
$oldLink = ($_GET['oldLink'] !== "")? $_GET['oldLink'] : false;
$newLink = ($_GET['newLink'] !== "")? $_GET['newLink'] : false;
$id = ((int)$_GET['id'] !== null) ? (int)$_GET['id'] : false;
      if($oldLink !== "Pas de CV"){
        unlink("C:/xampp/htdocs/Personnes/assets/fichiers/".$oldLink) ;
      }
            if(isset($_FILES['CV']) AND !empty($_FILES['CV']['name'])) {               
                        $chemin = "C:/xampp/htdocs/Personnes/assets/fichiers/".$newLink ;
                        $resultat = move_uploaded_file($_FILES['CV']['tmp_name'], $chemin) ; 
                      // Update.
            $sql = $con->prepare("UPDATE infoProf SET PATHCV = ? WHERE IDPROF = ? LIMIT 1");
		if ($sql->execute(array($newLink,$id))) {
			http_response_code(204);
		}
		else
		{
			return http_response_code(422);	
		}
          }