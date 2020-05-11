<div id="pageContent">

    <?php

    if ($lvl < 2) {
        header("Location: index.php");
    }

    $mode = $_GET["m"];
    if ($mode != "ajout") {
        $id = $_POST["id"];
        $eleve = EleveManager::findById($id);
        if ($mode == "suppr") {
            header("Location: index.php?action=adminElevesAction&m=suppr&id=" . $eleve->getIdEleve());
        }
    }
    echo '
        <form class="form" action="index.php?action=adminElevesAction&m=' . $mode . '" method = "POST">';

    if ($mode != "ajout") {
        echo '  <input type="text" id="idEleve" name="idEleve" hidden value = "' . $eleve->getIdEleve() . '">';
    }

    echo '      <p class="field">  
                <label for="NomEleve"> Nom</label>
                <input type="text" id="NomEleve" name="NomEleve" placeholder="Nom de l\'élève"';
    if ($mode != "ajout") {
        echo 'value ="' . $eleve->getNomEleve() . '"';
    }

    echo '          >
            </p> ';

    echo '      <p class="field">  
                <label for="PrenomEleve"> Prenom</label>
                <input type="text" id="PrenomEleve" name="PrenomEleve" placeholder="Prenom de l\'élève" required ';
    if ($mode != "ajout") {
        echo 'value ="' . $eleve->getPrenomEleve() . '"';
    }

    echo '          >
            </p> ';

    echo '      <p class="field">  
                <label for="Classe"> Classe</label>
                <input type="text" id="Classe" name="Classe" placeholder="Classe de l\'élève"  required ';
    if ($mode != "ajout") {
        echo 'value ="' . $eleve->getClasse() . '"';
    }

    echo '          >
            </p> ';
    echo '      <p class="centrer">
            <input id="submit" type="submit" value="';
    switch ($mode) {
        case "ajout":
            echo 'Ajouter';
            break;
        case "modif":
            echo 'Modifier';
            break;
        case "suppr":
            echo 'Supprimer';
            break;
    }
    echo '">
    <a class="button" href="index.php?action=adminEleves">Annuler</a>
        </p>
    </form>
';

    ?>
</div>