<?php 
require 'connect.php';
$service = ($_GET['service'] !== null)? $_GET['service'] : false;
$personnes = [];
if ($service === 'TVM') {
	$sql = $con->prepare("SELECT IDPERS,NOMPERS,PRENOMPERS,AVATAR,MATRICULE,NOMSERV,FONCTION 
   		     FROM (personne AS pers INNER JOIN infoprof AS prof ON pers.IDPERS = prof.IDPROF) 
        	INNER JOIN service AS serv ON serv.IDSERVICE=prof.IDSERVICE");
		if ($result = $sql->execute()){
			$pers = 0;
		while ($row = $sql->fetch(PDO::FETCH_ASSOC)) {
			$personnes[$pers]['id'] = $row['IDPERS'];
			$personnes[$pers]['nom'] = $row['NOMPERS'];
			$personnes[$pers]['prenom'] = $row['PRENOMPERS'];
			$personnes[$pers]['matricule'] = $row['MATRICULE'];
			$personnes[$pers]['nomService'] = $row['NOMSERV'];
    		$personnes[$pers]['fonction'] = $row['FONCTION']; 
    		$personnes[$pers]['image'] = $row['AVATAR']; 
			$pers++;
		}
		echo json_encode(['data'=>$personnes]);
	}
	else {
		http_response_code(404);
	}
}
else {
	$sql = $con->prepare("SELECT IDPERS,NOMPERS,PRENOMPERS,AVATAR,MATRICULE,NOMSERV,FONCTION 
   		     FROM (personne AS pers INNER JOIN infoprof AS prof ON pers.IDPERS = prof.IDPROF) 
        	INNER JOIN service AS serv ON serv.IDSERVICE=prof.IDSERVICE WHERE NOMSERV = ?");
		if ($result = $sql->execute(array($service))){
			$pers = 0;
		while ($row = $sql->fetch(PDO::FETCH_ASSOC)) {
			$personnes[$pers]['id'] = $row['IDPERS'];
			$personnes[$pers]['nom'] = $row['NOMPERS'];
			$personnes[$pers]['prenom'] = $row['PRENOMPERS'];
			$personnes[$pers]['matricule'] = $row['MATRICULE'];
			$personnes[$pers]['nomService'] = $row['NOMSERV'];
    		$personnes[$pers]['fonction'] = $row['FONCTION']; 
    		$personnes[$pers]['image'] = $row['AVATAR']; 
		$pers++;
	}
	echo json_encode(['data'=>$personnes]);
}
else {
	http_response_code(404);
}
}
 ?>