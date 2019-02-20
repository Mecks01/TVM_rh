<?php 
require 'connect.php';
$personne = [];
$link ;
// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? (int)$_GET['id'] : false;
if (!$id) {
	return http_response_code(400);
}
// Delete Image.
$sqlImg = $con->prepare("SELECT AVATAR,NOMPERS FROM personne WHERE IDPERS = ? LIMIT 1") ;
if ($result = $sqlImg->execute(array( $id))) {
	$pers = 0;
	while ($row = $sqlImg->fetch(PDO::FETCH_ASSOC)) {
		$link = $row['AVATAR'];
		$pers++;
	}
	if(trim($link) != "defaultImg.png")
	{
		unlink("C:/Users/asus/Desktop/TVM/Personnes/src/assets/images/$link") ;
	}
}


///delete all diplomas
$sql = $con->prepare( " DELETE FROM diplome WHERE IDPROF = ? ");
if ($sql->execute(array($id))) {
	http_response_code(204);
}
else
{
	return http_response_code(422);	
}

///delete from infoprof first
$sql1 = $con->prepare( "DELETE FROM infoprof WHERE IDPROF = ? ");
if ($sql1->execute(array($id))) {
	http_response_code(204);
}
else
{
	return http_response_code(422);	
}
/////then delete personne
$sql2 = $con->prepare( "DELETE FROM personne WHERE IDPERS = ? ");
if ($sql2->execute(array($id))) {
	http_response_code(204);
}
else
{
	return http_response_code(422);	
}
 ?>