<?php 
session_start();

// db credentials

define('dns', 'mysql:host=localhost;dbname=tvmrh');
define('user', 'root');
define('pass', '');

function connect()
{
	try {
		$connect = new PDO(dns, user, pass);
	}
	catch(PDOException $e) {
		die( "Failed to connect ".$e->getMessage());
	}
	return $connect;
}
$con = connect();
