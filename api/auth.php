<?php
 include('connect.php') ;
 $personne = [];
 $user = json_decode(file_get_contents('php://input'),true);
 if(isset($user['username']) && isset($user['password']))
 {
 	$num = $user['username'] ;
 	$pass = sha1($user['password']);
 	$sql = $con->prepare("SELECT IDPERS FROM personne WHERE NUMPERS =? AND PASSWORD = ? ");
 	if($sql->execute(array($num, $pass))){
 		$personne = $sql->fetch(PDO::FETCH_ASSOC);
 		
 		$sql1 = $con->prepare("SELECT IDSERVICE FROM infoprof WHERE IDPROF = ?");
 		if($sql1->execute(array($personne['IDPERS']))){
 			$res = $sql1->fetch(PDO::FETCH_ASSOC);
 			
 			$sql2 = $con->prepare("SELECT GRADE,NOMSERV FROM service WHERE IDSERVICE = ?");
 			if($sql2->execute(array($res['IDSERVICE']))){
 				$res1 = $sql2->fetch(PDO::FETCH_ASSOC);
			 	$personne['GRADE'] = $res1['GRADE'];
			 	$personne['NOMSERV'] = $res1['NOMSERV'];
 			}
 		}
 	}
 	if (!empty($personne) and isset($personne['IDPERS'])) {
 			echo json_encode(array('status'=>'200','data'=>$personne));
 	}
 	else{
 		echo json_encode(array('status'=>'300'));
 	}
 }