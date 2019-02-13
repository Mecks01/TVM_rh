<?php 
require 'connect.php';

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? (int)$_GET['id'] : false;

$personne = [];

$sql=$con->prepare("SELECT * FROM personne WHERE IDPERS = ? LIMIT 1") ;
if ($result = $sql->execute(array($id))) {
	while ($row = $sql->fetch(PDO::FETCH_ASSOC)) {
		$personne['id'] = $row['IDPERS'];
		$personne['nom'] = $row['NOMPERS'];
		$personne['prenom'] = $row['PRENOMPERS'];
		$personne['numTel'] = $row['NUMPERS'];
		$personne['image'] = $row['AVATAR'];
		$personne['dateNaissance'] = $row['DATENAISSANCE'];
	}

	echo json_encode(['data'=>$personne]);
}
else
{
	http_response_code(404);
}
 ?>
