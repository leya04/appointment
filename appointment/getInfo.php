<?php

    //getname.php
    include 'connect.php';

    $q = "select patient_id, concat(last_name,', ' ,First_Name,' ', LEFT(middle_Name,1),'.') as fullName from patient where Patient_id = Patient_id" ;
    $result = $conn->query($q);
    $data = array();
    
    while($row = $result->fetch_object()){
		array_push($data,$row);
	}
	
	echo json_encode($data);

?>