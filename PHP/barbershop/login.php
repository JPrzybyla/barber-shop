<?php
if (isset($_REQUEST['username'])){

    header('Content-type: application/json');

    $username = $_REQUEST['username'];
    $password = hash('sha256', $_REQUEST['password']);


    require_once "dbconnect.php";

    // Create connection
    $conn = @new mysqli($host, $db_user, $db_password, $db_name);
    // Check connection
    if ($conn->connect_error) {
        http_response_code(503);
        die("Connection failed: " . $conn->connect_error);
    }
    require_once 'dataValidation.php';

    if(textValidation($username)){
        $sql = "SELECT * FROM users WHERE password = '$password' AND username = '$username'";
        $request = $conn->query($sql);
        if($request->num_rows>0){
            http_response_code(200);

            //create jwt token for user
            require_once 'jwt.php';
            $jwt = createJWT();
            echo(json_encode($jwt));
        }
        else{
            http_response_code(403);
            echo(false);
        }

    }
    else{
        http_response_code(403);
        echo(false);
    }

    $conn->close();
}