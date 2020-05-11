 <!--MENU-->
 <div id="contenuPage">

<?php
if ($lvl < 2){
    header("Location: index.php?action=connexion");
}
include('AdminNav.php')
?>
 <div class="contenuGestionNotes">
        <div class="ensembleBouttonListe">
            <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=adminEnseignantsForm&m=ajout">Ajouter un enseignants</a>
        </div>
    </div>
<div class="tablehauteur">
    <table id="tableFormulaire">
        <thead>
            <tr>
                <th class="titreTh" id="traitTh">Matière</th>
                <th class="titreTh" id="traitTh">Pseudo</th>
                <th class="titreTh" id="traitTh">Nom</th>
                <th class="titreTh" id="traitTh">Prénom</th>
                <th class="titreTh">Action</th>
            </tr>
        </thead>
    <?php
    $enseignants = UtilisateurManager::getListEnseignants();
    foreach($enseignants as $e){
        echo'<tbody>
        <tr>
            <td class="bordertd" data-label="NomUtilisateur">A INSERER</td>
            <td class="bordertd" data-label="NomUtilisateur">' .$e->getNomUtilisateur(). ''.$e->getPrenomUtilisateur()[0]. '</td>
            <td class="bordertd" data-label="NomUtilisateur">' .$e->getNomUtilisateur(). '</td>
            <td class="bordertd" data-label="NomUtilisateur">' .$e->getPrenomUtilisateur(). '</td>
            <td class="bordertd">
            <form action="index.php?action=adminElevesForm&m=modif" method="POST">
            <input id="buttonAction" type="image" id="" alt="Login"
            src="MEDIAS/IMAGES/modifier.png">
            <input type="hidden" name="id" value="' . $e->getIdUtilisateur() . '">
            </form>
            <form action="index.php?action=adminElevesForm&m=suppr" method="POST">
            <input id="buttonAction" type="image" id="" alt="Login"
            src="MEDIAS/IMAGES/supprimer.png">
            <input type="hidden" name="id" value="' . $e->getIdUtilisateur() . '">
            </form>
            </td>
        </tr>';
    }
    ?>
    </div>