<div id="pageContent">

<?php

session_destroy();
$_SESSION = array();
$titre="Déconnexion";


echo '<p class="MessageLog">Vous êtes à présent déconnecté</p> <br />';
header("refresh:3,url=index.php");
?>

</div>