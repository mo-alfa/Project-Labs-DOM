<?php 

    include "srt.php";



    if(isset($_POST['user_name']) AND isset($_POST['user_email']) AND isset($_POST['user_message']))
    {
        if(!empty($_POST['user_name']) AND !empty($_POST['user_email']) AND !empty($_POST['user_message']))
        {
            $name=htmlspecialchars($_POST['user_name']);
            $email=htmlspecialchars($_POST['user_email']);
            $message=htmlspecialchars($_POST['user_message']);
            
            echo "Bonjour <em> $name </em> merci pour votre contact votre email: <em> $email </em> , nous lu votre message: <em> $message </em>";


        }

    }


?>