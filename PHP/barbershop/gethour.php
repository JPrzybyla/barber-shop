<?php
if(isset($_REQUEST['name'])){
    
    $date = $_REQUEST['date'];
    $name = $_REQUEST['name'];

    require_once "dbconnect.php";

    // Create connection
    $conn = @new mysqli($host, $db_user, $db_password, $db_name);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //TODO: add form validation (xss and sql injection)
    $sql = "SELECT * FROM reservations WHERE date = '$date'";

    $result = $conn->query($sql);
    $followingdata = $result->fetch_array(MYSQLI_ASSOC);
    print_r($followingdata);
    



    $conn->close();
}
?>