<?php
 include('connect.php') ;

 $user = json_decode(file_get_contents('php://input'),true);
 if(isset($user['username']) && isset($user['password']))
 {
 	$sql = $con->prepare("SELECT * FROM personne WHERE NUMPERS=? AND PASSWORD= ? ");
 	$sql->execute(array($user['username']), $user['password']);
 	$row = $sql->fetch(PDO::FETCH_ASSOC);
 	if (!empty($row)) {
 		echo json_encode(array('status'=>'200','data'=>$row));
 	}
 	else{
 		echo json_encode(array('status'=>'300'));
 	}
 }