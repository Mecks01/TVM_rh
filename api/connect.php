<?php 
// db credentials
define('dns', 'mysql:host=localhost;dbname=tvmrh;charset=UTF8');
define('user', 'root');
define('pass', '');
function connect()
{
	try {
		$connect = new PDO(dns, user, pass);
		$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e) {
		die( "Failed to connect ".$e->getMessage());
	}
	return $connect;
}
$root = $_SERVER['DOCUMENT_ROOT']."/Personnes/assets/" ;
$con = connect();