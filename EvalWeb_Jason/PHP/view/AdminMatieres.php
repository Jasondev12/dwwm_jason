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
            <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=adminElevesForm&m=ajout">Ajouter un élève</a>
        </div>
    </div>
<div class="tablehauteur">
    <table id="tableFormulaire">
        <thead>
            <tr>
                <th class="titreTh" id="traitTh">Nom</th>
                <th class="titreTh" id="traitTh">Actions</th>
            </tr>
        </thead>
    <?php
   $matieres = MatiereManager::getList();
    foreach($matieres as $m){
        echo'<tbody>
        <tr>
            <td class="bordertd" data-label="LibelleMatiere">' .$m->getLibelleMatiere(). '</td>
            <td class="bordertd">
            <form action="index.php?action=adminElevesForm&m=modif" method="POST">
            <input id="buttonAction" type="image" id="" alt="Login"
            src="MEDIAS/IMAGES/modifier.png">
            <input type="hidden" name="id" value="' . $m->getidMatiere() . '">
            </form>
            <form action="index.php?action=adminElevesForm&m=suppr" method="POST">
            <input id="buttonAction" type="image" id="" alt="Login"
            src="MEDIAS/IMAGES/supprimer.png">
            <input type="hidden" name="id" value="' . $m->getidMatiere() . '">
            </form>
            </td>
        </tr>';
    }
    ?>
    </div>