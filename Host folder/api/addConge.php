<?php 
    require 'connect.php';
    
	$postdata = file_get_contents("php://input");
	if(isset($postdata) && !empty($postdata))
	{
		$request = json_decode($postdata);
		$idProf = $request->data->idProf;
		$dateDebut = $request->data->dateDebut;
		$nbJours = $request->data->nbJours;
		$dateRetour = $request->data->dateRetour;
		$motif = $request->data->motif;
		
		$sql = $con->prepare("INSERT INTO conge(IDPROF,DATEDEBUT,DATERETOUR,NBJOUR,MOTIF) VALUES (?,?,?,?,?)") ;
			$sql->execute(array($idProf,$dateDebut,$dateRetour,$nbJours,$motif)) ;
            $serv = $con->lastInsertId();
    }