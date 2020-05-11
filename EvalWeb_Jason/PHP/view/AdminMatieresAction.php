<div id="pageContent">

    <?php

    if ($lvl < 2) {
        header("Location: index.php");
    }

    $mode = $_GET["m"];
    $m = new Matiere($_POST);

    var_dump($m);

    switch ($mode) {
        case "ajout":
            if ($lvl > 1)
            MatiereManager::add($m);
            break;
        case "modif":
            if ($lvl > 1)
                $m->setidMatiere($_POST["idMatiere"]);
                MatiereManager::update($m);
            break;
        case "suppr":
            if ($lvl > 1) {
                $m->setidMatiere($_GET["id"]);
                MatiereManager::delete($m);
            }
            break;
        default:
            break;
    }
    header("location:index.php?action=adminMatieres");

    ?>
</div>