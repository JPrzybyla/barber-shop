<?php
function createJWT(){
    $headers = array('alg'=>'HS256','typ'=>'JWT');

    $expdate = date('dmY', strtotime("+1 day"));
    $payload = array('isAuth'=>'true', 'exp'=> $expdate);

    //encoding with json

    $headers = json_encode($headers);
    $payload = json_encode($payload);

    //base64

    $headers = base64_encode($headers);
    $payload = base64_encode($payload);


    $signaturepayload = $headers.'.'.$payload;


    //generating jwt token
    require_once "jwtsecret.php";
    $signature = hash_hmac('sha256', $signaturepayload, $secret);

    $jwt = $signaturepayload.'.'.$signature;

    return $jwt;

}

function verifiJWT($token){

    //splits jwt into piecies
    $parts = explode('.',$token);

    $signaturepayload = $parts[0].'.'.$parts[1];

    require_once "jwtsecret.php";

    //check if signature is correct
    $verifysignature = hash_hmac('sha256', $signaturepayload, $secret);
    if ($verifysignature===$parts[2]){

        //check if signature is expired

        $payload = base64_decode($parts[1]);
        $payload = json_decode($payload,true);

        $todaysdate = date('dmY');

        if($todaysdate>=$payload['exp']){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}