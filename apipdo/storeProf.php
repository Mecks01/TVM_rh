<?php 
	require 'connect.php';

	$postdata = file_get_contents("php://input");
	if(isset($postdata) && !empty($postdata))
	{
		$request = json_decode($postdata);

		$id = $request->data->idEmp;
		$matricule = $request->data->matricule;
		$emailProf = $request->data->emailProf;
		$numProf = $request->data->numProf;
		$dateEmbauche = $request->data->dateEmbauche;
		$nomService = $request->data->nomService;
		$fonction = $request->data->fonction;
		$grade = $request->data->grade;
		$pathCV = $request->data->pathCV;
		$diplomes = $request->data->diplome ;

		$sql0 = $con->prepare("SELECT IDSERVICE FROM service WHERE FONCTION = ? AND NOMSERV = ? AND GRADE = ?");
		if($sql0->execute(array($fonction,$nomService,$grade))) 
		{
			$row = $sql0->fetch(PDO::FETCH_ASSOC);
			$serv = $row['IDSERVICE'];
		}

		if (!isset($serv)){
			$sql = $con->prepare("INSERT INTO service(NOMSERV,FONCTION,GRADE) VALUES (?,?,?)") ;

			$sql->execute(array($nomService,$fonction,$grade)) ;
			$serv = $con->lastInsertId();
		}

			$sql2 = $con->prepare("INSERT INTO cv (PATHCV) VALUES (?)");
			if ($sql2->execute(array($pathCV))) {
				$cv = $con->lastInsertId();
			}
			else {
				http_response_code(422);
				echo "Erreur insertion CV" ;
			}
			for ($i=0; $i < sizeOf($diplomes); $i++) { 
					$degree = trim(strval($diplomes[$i]->degree)) ;
					$filiere = trim(strval($diplomes[$i]->filiere));
					$mention = trim(strval($diplomes[$i]->mention)) ;
					$nomInstitution = trim(strval($diplomes[$i]->nomInstitution));

					$sqli = $con->prepare("INSERT INTO diplome (IDCV,DEGREE,FILIERE,MENTION,NOMINSTITUTION) VALUES (?,?,?,?,?)") ;
					$sqli->execute(array($cv,$degree,$filiere,$mention,$nomInstitution));
				}

		$sql3 = $con->prepare("INSERT INTO infoprof(IDPROF,IDSERVICE,IDCV,MATRICULE,EMAILPROF,NUMPROF,DATEEMBAUCHE) VALUES (?,?,?,?,?,?,?)") ;
		if ($sql3->execute(array($id,$serv,$cv,$matricule,$emailProf,$numProf,$dateEmbauche))) {
			$idEmp = ['id' => $con->lastInsertId()];
			echo json_encode(['data'=>$idEmp]);
		}
		else {
			http_response_code(422);
			echo "Erreur insertion Professionnel" ;
		}
	}
 ?>