<?php
    if(isset($_REQUEST['jwt'])){
        $token = $_REQUEST['jwt'];

        require_once 'jwt.php';
        if(verifiJWT($token)){
            http_response_code(200);
            echo(json_encode(true));
        }
        else{
            http_response_code(200);
            echo(json_encode(false));
        }
    }