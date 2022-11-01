<?php
	//login.php
	include 'connect.php';

	$postdata= file_get_contents("php://input");
	$request = json_decode($postdata);


	$q = "SELECT Patient_Id FROM patient WHERE email ='$request->email' AND password = sha1('$request->pass')";
	$result = $conn->query($q);

	if($result -> num_rows != 0){
		$msg = 1;
	}else{
        $msg = 0;
    }
	
	echo json_encode($msg);
?>