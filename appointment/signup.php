<?php

    include 'connect.php';

	$postdata= file_get_contents("php://input");
	$request = json_decode($postdata);
    
    $q = "INSERT INTO patient(First_Name,last_name,middle_Name,birthdate,age,email,password) values('$request->fname','$request->lname','$request->mname','$request->bdate',$request->age,'$request->email',sha1('$request->pass'))";
    
    $result = $conn->query($q);
        if($result){
            $msg = "ok";
        }
	echo json_encode($result);

?>