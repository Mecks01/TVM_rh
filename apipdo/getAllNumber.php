<?php 
/**
* Returns the list of pers
*/
require 'connect.php';
$numbers = [];
$sql = $con->prepare("SELECT NUMPERS FROM personne");
if($sql->execute()){
	$pers = 0;
	while ($row = $sql->fetch(PDO::FETCH_ASSOC)) {
		$numbers[$pers] = $row['NUMPERS'];
		$pers++;
	}

	echo json_encode(['data'=>$numbers]);
}
else
{
	http_response_code(422);
}

 ?>