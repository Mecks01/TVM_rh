<?php 

$pathCV = ($_GET['id'] !== "")? $_GET['id'] : false;
if (isset($_FILES['CV']) AND !empty($_FILES['CV']['name'])) {
	$tailleMax = 2097152;
	if($_FILES['CV']['size'] <= $tailleMax) {
		$chemin = "C:/Users/Hp 123/Desktop/Angular/src/assets/fichiers/".$pathCV ;
		$resultat = move_uploaded_file($_FILES['CV']['tmp_name'], $chemin);
	}
	else {
		$msg = "La taille de votre fichier ne doit pas dépasser 2Mo" ;
	}
}
 ?>