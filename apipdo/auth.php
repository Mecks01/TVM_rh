<?php
 include('connect.php') ;

 $personne = [];
 $user = json_decode(file_get_contents('php://input'),true);
 if(isset($user['username']) && isset($user['password']))
 {
 	$num = $user['username'] ;
 	$pass = sha1($user['password']);

 	$sql = $con->prepare("SELECT * FROM personne WHERE NUMPERS =? AND PASSWORD = ? ");
 	if($sql->execute(array($num, $pass))){
 		$personne = $sql->fetch(PDO::FETCH_ASSOC);
 	}
 	if (!empty($personne)) {
 			echo json_encode(array('status'=>'200','data'=>$personne));
 	}
 	else{
 		echo json_encode(array('status'=>'300'));
 	}
 }