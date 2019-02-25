<?php
 include('connect.php') ;
 // Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);
	// Validate.
	if(trim($request->data->nomService) === '' || trim($request->data->grade === ''))
	{
		return http_response_code(400);
    } 

    $nomService = trim($request->data->nomService);
	$grade= trim($request->data->grade); 

    $sql = $con->prepare("SELECT IDSERVICE FROM service WHERE NOMSERV =? AND GRADE = ? ");
            if($sql->execute(array($nomService, $grade))){
                $service = $sql->fetch(PDO::FETCH_ASSOC);
                $idService=$service["IDSERVICE"] ;
            }

    $sql1 = $con->prepare("SELECT IDPROF FROM infoprof WHERE IDSERVICE=? LIMIT 1") ;
    if($sql1->execute(array($idService))){
        $prof = $sql1->fetch(PDO::FETCH_ASSOC);
        $idProf=$prof["IDPROF"] ;
    }
            if (!empty($prof)) {
                    echo json_encode(array('status'=>'200'));
            }
            else{
                echo json_encode(array('status'=>'300'));
            }
}