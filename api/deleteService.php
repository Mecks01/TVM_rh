<?php 
require 'connect.php';

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);
	$nomServ = $request->$data->nomServ ;

	$sql1 = $con->prepare("DELETE FROM fonctions WHERE IDSERV = (SELECT IDSERV FROM services WHERE NOMSERV = ?)");
	if ($sql1->execute(array($nomServ))) {
		http_response_code(204);
	}
	else {
		http_response_code(422);
	}
	$sql = $con->prepare("DELETE FROM services WHERE NOMSERV = ?");
	if ($sql->execute(array($nomServ))) {
		http_response_code(204);
	}
	else {
		http_response_code(422);
	}
}
 ?>