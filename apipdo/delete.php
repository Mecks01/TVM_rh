<?php 

require 'connect.php';
$personne = [];
$link ;

// Extract, validate and sanitize the id.

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? (int)$_GET['id'] : false;

if (!id) {
	return http_response_code(400);
}

// Delete Image.
$sqlImg = $con->prepare("SELECT * FROM personne WHERE IDPERS = ? LIMIT 1") ;
if ($result = $sqlImg->execute(array( $id))) {
	$pers = 0;
	while ($row = $sqlImg->fetch(PDO::FETCH_ASSOC)) {
		$link = $row['avatar'];
		$pers++;
	}
	if(trim($link) != "defaultImg.png")
	{
		unlink("./images/$link") ;
	}
}

// Delete all from table
$sql = $con->prepare( "DELETE FROM personne WHERE IDPERS = ? LIMIT 1");
if ($sql->execute(array($id))) {
	http_response_code(204);
}
else
{
	return http_response_code(422);	
}
 ?>
