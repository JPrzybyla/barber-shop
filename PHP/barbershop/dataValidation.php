<?php
function dateValidation($date) {
    $regex = '^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$^';
    return preg_match($regex, $date);
}
function numberValidation($number) {
    $regex = '/([0-9])/';
    return preg_match($regex, $number);
}
function nameValidation($name) {
    $regex = '/^([a-zA-Z]+( [a-zA-Z]+)+)$/i';
    return preg_match($regex, $name);
}
function hourValidation($hour) {
    $regex = '^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$^';
    return preg_match($regex, $hour);
}
function typeValidation($type) {
    if($type=='beard'||'hair'||'beard+hair')
        return true;
    else
        return false;
}
function textValidation($text){
    $regex = '^[a-zA-Z]+$^';
    return preg_match($regex, $text);
}

//Not quite nice and clean AND gate

function verify($date, $number, $name, $hour, $type){
    if(dateValidation($date)&&numberValidation($number)&&nameValidation($name)&&hourValidation($hour)&&typeValidation($type)==true)
        return true;
    else
        return false;
}
