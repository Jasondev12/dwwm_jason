<?php
//on recupere l'action à mener (ajout/modif/suppression)
if (isset($_GET["act"])) {
    $act = $_GET["act"];
    if ($act != "ajout") {
        // on recupere l'id de la personne à modifier ou à supprimer via le $_GET
        $id = $_GET["id"];
        $p = EleveManager::findById($id);
    }
}

$prenomUtilisateur = (isset($_SESSION['Login'])) ? $_SESSION['Login'] : '';
$affichage= '
<div class="contenuGestionNotes">
        <div class="ensembleBouttonListe">
            <a class="bouttonListe" id="bouttonListe1" type="submit" href="index.php?action=ajout">Ajouter une Eleve</a>
        </div>
    </div>

<div class="tablehauteur">
    <table id="tableFormulaire">
        <thead>
            <tr>
                <th class="titreTh" id="traitTh">Nom</th>
                <th class="titreTh" id="traitTh">Prenom</th>
                <th class="titreTh" id="traitTh">Classe</th>
                <th class="titreTh">Action</th>
            </tr>
        </thead>';
?>
        <?php
        $listeEleves = EleveManager::getList();
        foreach ($listeEleves as $listeEle) {
    $affichage .=' 
     <tbody>
            <tr>
                <td class="bordertd" data-label="NomEleve">'. $listeEle->getNomEleve() . '</td>
                <td class="bordertd" data-label="PrenomEleve">'. $listeEle->getPrenomEleve() . '</td>
                <td class="bordertd" data-label="Classe">' . $listeEle->getClasse() . '</td>
                <td class="bordertd" data-label="recapProduction"><a class="boutton" id="submit" type="submit" href="index.php?action=gestionEleveForm&m=modif&id=' . $listeEle->getIdEleve() . '" >modif</a><a class="boutton" id="submit" type="submit" href=".php" >suppr</a></td>
            </tr>
        </tbody>';
    }
    ?>
    <?php
    $affichage .=' 
    </table>
</div>';
echo $affichage;