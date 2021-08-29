<?php
    if (isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        require_once "dbconnect.php";

        // Create connection
        $conn = @new mysqli($host, $db_user, $db_password, $db_name);
        // Check connection
        if ($conn->connect_error) {
            http_response_code(503);
            die("Connection failed: " . $conn->connect_error);
        }
        //TODO: add form validation (xss and sql injection)
        $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
        $conn->query($sql);
        http_response_code(201);

        $conn->close();
    }



