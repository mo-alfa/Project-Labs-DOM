<?php

$user="root";
$mdp="";
$db="contact";
$server="localhost";

$link=mysqli_connect($server,$user,$mdp,$db);

if($link)
{
    echo " Demande a ete bien reçu merci!";
    
}else
{
    die("Demande a ete echoue");
}


?>