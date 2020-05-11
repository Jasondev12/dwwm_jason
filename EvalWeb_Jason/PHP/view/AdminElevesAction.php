<?php

if ($lvl < 2) {
    header("Location: index.php");
}

$mode = $_GET["m"];
$p = new Eleve($_POST);

switch ($mode) {
    case "ajout":
        if ($lvl > 1)
            EleveManager::add($p);
        break;
    case "modif":
        if ($lvl > 1)
            $p->setIdEleve($_POST["idEleve"]);
            EleveManager::update($p);
        break;
    case "suppr":
        if ($lvl > 1) {
            $p->setIdEleve($_GET["id"]);
            EleveManager::delete($p);
        }
        break;
    default:
        break;
}
header("location:index.php?action=adminEleves");

?>