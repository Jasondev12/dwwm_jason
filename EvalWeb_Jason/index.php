<?php
function ChargerClasse($classe)
{
	if (file_exists("PHP/controller/" . $classe . ".Class.php")) {
		require "PHP/controller/" . $classe . ".Class.php";
	}

	if (file_exists("PHP/model/" . $classe . ".Class.php")) {
		require "PHP/model/" . $classe . ".Class.php";
	}
}
require 'PHP/model/DbConnect.Class.php';

spl_autoload_register("ChargerClasse");

//Fonction d'affichage de la page
function AfficherPage($page)
{

	$chemin = $page[0];
	$nom = $page[1];
	$titre = $page[2];

    include 'php/view/Head.php';
    include 'php/view/header.php';
    include $chemin . $nom . '.php';//Chargement de la page en fonction du chemin et du nom
    include 'php/view/Footer.php';
}

DbConnect::init();//Initialisation bdd
session_start();//Initialisation session

//Définition des routes avec leur nom, le chemin et le nom du fichier, et le titre de la page
$routes = [
    "default" => ["php/view/","ConnexionForm","Connexion"],

    "connexion" => ["php/view/","ConnexionForm","Connexion"],
    "connexionAction" => ["php/view/","ConnexionAction","Connexion"],

    "deconnexion" => ["php/view/","deconnexionAction","Deconnexion"],

    "adminMenu" => ["php/view/","AdminMenu","Menu Proviseur"],
    
	"adminEleves" => ["php/view/","AdminEleves","Gestion des Elèves"],
    "adminElevesForm" => ["php/view/","AdminElevesForm","Gestion des Elèves"],
    "adminElevesAction" => ["php/view/","AdminElevesAction","Gestion des Elèves"],

    "adminMatieres" => ["php/view/","AdminMatieres","Gestion des Matières"],
    "adminMatieresForm" => ["php/view/","AdminMatieresForm","Gestion des Matières"],
    "adminMatieresAction" => ["php/view/","AdminMatieresAction","Gestion des Matières"],

    "adminEnseignants" => ["php/view/","AdminEnseignants","Gestion des Enseignants"],
    "adminEnseignantsForm" => ["php/view/","AdminEnseignantsForm","Gestion des Enseignants"],
    "adminEnseignantsAction" => ["php/view/","AdminEnseignantsAction","Gestion des Enseignants"],

    "adminNotes" => ["php/view/","AdminNotes","Gestion des Notes"],
    "adminNotesForm" => ["php/view/","AdminNotesForm","Gestion des Notes"],
    "adminNotesAction" => ["php/view/","AdminNotesAction","Gestion des Notes"]

];


//Si une route est demandée
if(isset($_GET["action"])){

    $action = $_GET["action"];

    //Si cette route existe dans le tableau des routes
    if(isset($routes[$action])){
        //Afficher la page correspondante
        AfficherPage($routes[$action]);
    }else{
        //Sinon afficher la page par defaut
        AfficherPage($routes["default"]);
    }

}else{
    //Sinon afficher la page par defaut
    AfficherPage($routes["default"]);
}