<?php
    require 'connect.php';

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
      {
        $request = json_decode($postdata);

        $id = mysqli_real_escape_string($con, trim($request->data->idEmp)) ;
        $matricule = mysqli_real_escape_string($con, trim($request->data->matricule));
        $emailProf = mysqli_real_escape_string($con, trim($request->data->emailProf));
        $numProf = mysqli_real_escape_string($con, trim($request->data->numProf));
        $dateEmbauche = mysqli_real_escape_string($con, trim($request->data->dateEmbauche));

        $nomService = mysqli_real_escape_string($con, trim($request->data->nomService));
        $fonction = mysqli_real_escape_string($con, trim($request->data->fonction));
        $grade = mysqli_real_escape_string($con, trim($request->data->grade));

        $pathCV = mysqli_real_escape_string($con, trim($request->data->pathCV));

        $diplomes = $request->data->diplome ; 


        $sql0 ="SELECT `IDSERVICE` FROM `service` WHERE (`FONCTION` = '{$fonction}' AND `NOMSERV` = '{$nomService}' AND `GRADE` = '{$grade}')" ;

        if ($result = mysqli_query($con, $sql0)){
            $row = mysqli_fetch_assoc($result) ;
            $serv = $row['IDSERVICE'];
        }
        
        if (!isset($serv)){
                    $sql="INSERT INTO `service`(`NOMSERV`,`FONCTION`,`GRADE`) VALUES ('{$nomService}','{$fonction}','{$grade}')" ;
                    mysqli_query($con,$sql) ;
                    $serv=mysqli_insert_id($con) ;  
                    }


$sql2="INSERT INTO `cv`(`PATHCV`) VALUES ('{$pathCV}')" ;
    if(mysqli_query($con,$sql2)){
        $cv = mysqli_insert_id($con) ;
    }
    else {
        http_response_code(422);
    echo "Erreur insertion CV" ;
}

for($i=0 ; $i < sizeOf($diplomes) ; $i++){
            $degree = trim(strval($diplomes[$i]->degree)) ;
            $filiere = trim(strval($diplomes[$i]->filiere)) ;
            $mention = trim(strval($diplomes[$i]->mention)) ;
            $nomInstitution = trim(strval($diplomes[$i]->nomInstitution)) ;

        $sqli = "INSERT INTO `diplome`(`IDCV`,`DEGREE`,`FILIERE`,`MENTION`,`NOMINSTITUTION`) VALUES ('{$cv}','{$degree}','{$filiere}','{$mention}','{$nomInstitution}')" ;
        mysqli_query($con,$sqli) ;
        }  ;



$sql3="INSERT INTO `infoprof`(`IDPROF`,`IDSERVICE`,`IDCV`,`MATRICULE`,`EMAILPROF`,`NUMPROF`,`DATEEMBAUCHE`) VALUES ($id,$serv,$cv,'{$matricule}','{$emailProf}','{$numProf}','{$dateEmbauche}')" ;
    if(mysqli_query($con,$sql3)){
        $idEmp = ['id' => mysqli_insert_id($con)] ;
        echo json_encode(['data'=>$idEmp]);
    }
    else {
     http_response_code(422);
    echo "Erreur insertion Professionnel" ;
    }
  }