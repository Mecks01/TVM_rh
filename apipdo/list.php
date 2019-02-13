<?php 
require 'connect.php';
$personnes = [];
$sql = $con->prepare("SELECT * FROM personne");
if ($result = $sql->execute()){
	$pers = 0;
	while ($row = $sql->fetch(PDO::FETCH_ASSOC)) {
		$personnes[$pers]['id'] = $row['IDPERS'];
		$personnes[$pers]['nom'] = $row['NOMPERS'];
		$personnes[$pers]['prenom'] = $row['PRENOMPERS'];
		$personnes[$pers]['numTel'] = $row['NUMPERS'];
		$personnes[$pers]['image'] = $row['AVATAR'];
		$pers++;
	}

	echo json_encode(['data'=>$personnes]);
}
else {
	http_response_code(404);
}

 ?>
