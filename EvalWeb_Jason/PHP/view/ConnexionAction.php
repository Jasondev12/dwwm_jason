<div id="pageContent">

    <?php

    if (!isset($_POST['Login'])) // On est dans la page de formulaire
    {
        require 'Php/View/ConnexionForm.php'; // On affiche le formulaire
    } else { // Le formulaire a été validé
        $message = '';
        if (empty($_POST['Login']) || empty($_POST['MotdePasse'])) // Oublie d'un champ
        {
            $message = '<p>111une erreur s\'est produite pendant votre identification.
	                   Vous devez remplir tous les champs</p>
	                   <p>Cliquez <a href="index.php?action=connexion">ici</a> pour revenir</p>';
        } else // On check le mot de passe
        {
            $utilisateur = UtilisateurManager::get($_POST['Login']); // On recherche dans la base l'utilisateur et on rempli l'objet user

            if ($utilisateur != false) {
                if ($utilisateur->getMotdePasse() == ($_POST['MotdePasse'])) // Acces OK !
                {
                    $_SESSION['pseudo'] = $utilisateur->getLogin();
                    $_SESSION['level'] = $utilisateur->getRole();
                    $_SESSION['id'] = $utilisateur->getIdUtilisateur();
                    $message = '<p class="MessageLog">Bienvenue ' . $utilisateur->getLogin() . ', vous êtes maintenant connecté!</p>';

                    if($_SESSION['level'] < 2){
                        header("refresh:3,url=index.php?action=adminNotes"); 
                    }else{
                        header("refresh:3,url=index.php?action=adminMenu"); 
                    }

                    ?>
    <?php } else // Acces pas OK !
                {
                    $message = '<p class="MessageLog">Une erreur s\'est produite 	    pendant votre identification.<br /> Le mot de passe ou le pseudo
                entré n\'est pas correcte.</p>';
                    header("refresh:3,url=index.php?action=connexion");
                }
            } else // Acces pas OK !
            {
                $message = '<p class="MessageLog">Une erreur s\'est produite 	    pendant votre identification.<br /> Le mot de passe ou le pseudo
            entré n\'est pas correcte.</p>';
                header("refresh:3,url=index.php?action=connexion");
            }
        }

        echo $message;
    }

    ?>

</div>