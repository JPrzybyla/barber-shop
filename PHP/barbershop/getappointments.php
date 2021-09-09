<?php
if(isset($_REQUEST['date'])){
    $date = $_REQUEST['date'];

    require_once "dbconnect.php";

    // Create connection
    $conn = @new mysqli($host, $db_user, $db_password, $db_name);
    // Check connection
    if ($conn->connect_error) {
        http_response_code(503);
        die("Connection failed: " . $conn->connect_error);
    }
    //Verification if it is really date or some cheeky bastard is trying to mess with my database

    include_once 'dataValidation.php';
    if(dateValidation($date)){
        $result = $conn->query("SELECT * FROM reservations WHERE date = '$date'");

        //At this point I have no idea what im doing but somehow it works
        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        $qryResult = array();
        $qryResult['appointments'] = $rows;

        http_response_code(200);
        echo json_encode($qryResult);
    }
    else
        http_response_code(418);


    $conn->close();
}