<?php 
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	// Extract the data.
	$request = json_decode($postdata);

	// Validate.
	if(trim($request->data->nom) === '' || trim(request->data->numTel === ''))
	{
		return http_response_code(400);
	}
	$id = 
}
 ?>