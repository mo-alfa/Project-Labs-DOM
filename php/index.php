<?php 

    include "connexion.php";



    if(isset($_GET['nome']) AND isset($_GET['email']) AND isset($_GET['message']))
    {
        if(!empty($_GET['nome']) AND !empty($_GET['email']) AND !empty($_GET['message']))
        {
            $name=htmlspecialchars($_GET['nome']);
            $email=htmlspecialchars($_GET['email']);
            $message=htmlspecialchars($_GET['message']);
            
           


        }

    }


?>