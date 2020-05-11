
 <!--NAVIGATION-->
 <?php
 echo'<header>
 <div class="nav">
     <img class="site-logo" src="MEDIAS/IMAGES/icone.jpg" alt="">
     <div class="ensembleTitreMenu">
         <h1 class="titrenav">Gestion des notes</h1>
         <h2 class="titrenav">'.$titre.'</h2>
     </div>
     <div class="bouton-nav">';
     ?>
     <?php
     if(!isset($_SESSION['pseudo'])){
        echo '
         <a href="index.php?action=connexion">Connectez-vous</a>';
     } else
     {
         if($_SESSION['level'] == 2){
             echo '<p id="userInfo">Proviseur</p>';
         }else{
             $u = UtilisateurManager::get($_SESSION['pseudo']);
             echo '<p id="userInfo">'.$u->getNomUtilisateur().' '.$u->getPrenomUtilisateur().'</p>';

             $m= MatiereManager::findById($u->getidMatiere());
             echo '<p id="userInfo">'.$m->getLibelleMatiere().'</p>';
         }
         echo '<p><a class="buttonDeco" href="index.php?action=deconnexion">Deconnectez-vous</a></p>';
         $lvl = $_SESSION["level"];
     }

 ?>
     
     </div>
 </div>
 </header>