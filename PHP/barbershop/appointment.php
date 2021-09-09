<?php
if(isset($_REQUEST['name'])){
    $name = $_REQUEST['name'];
    $date = $_REQUEST['date'];
    $number = $_REQUEST['number'];
    $type = $_REQUEST['type'];
    $hour = $_REQUEST['hour'];

    require_once 'dbconnect.php';
    $conn = @new mysqli($host, $db_user, $db_password, $db_name);

    if($conn->connect_error) {
        http_response_code(503);
        die("Connection failed: " . $conn->connect_error);
    }

    //TODO: add response numbers
    //Check if really this hour is available
    $sql = "SELECT * FROM reservations WHERE date = '$date' AND hour = '$hour'";
    $result = $conn->query($sql);

    if($result->num_rows>=1){
        echo "stop";
    }
    else{
        //Import data validation
        include_once 'dataValidation.php';

        if(verify($date, $number, $name, $hour, $type)){
            $conn->query("INSERT INTO reservations (date, hour, type, name, number) VALUES ('$date', '$hour', '$type', '$name', '$number')");

            http_response_code(201);
            echo json_encode('added!');
        }
        else
            http_response_code(418);

    }

    $conn->close();
}