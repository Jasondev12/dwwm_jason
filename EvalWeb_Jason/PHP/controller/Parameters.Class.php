<?php

class Parameters
{

    /*******************************Attributs*******************************/
    
    private static $_host; // Addresse de l'hote
    private static $_dbname; // Nom de la bdd
    private static $_user;  // Nom de l'utilisateur
    private static $_password; // Mot de passe de l'utilisateur

    /******************************Accesseurs*******************************/

    public static function getHost(){
        return self::$_host;
    }

    public static function getDbname(){
        return self::$_dbname;
    }

    public static function getUser(){
        return self::$_user;
    }

    public static function getPassword(){
        return self::$_password;
    }

     /****************************Autres méthodes****************************/

    // Lecture et initialisation des paramètres
    public static function init()
    {

        $path="params.ini"; // Chemin du fichier des paramètres

        //Test de l'existence du fichier
        if(!file_exists($path)){ 
            echo "<h1>/!\ LE FICHIER DES PARAMETRES EST INEXISTANT: CONNEXION IMPOSSIBLE A LA BASE DE DONNEES /!\\</h1>";
            return;
        }

        $file = fopen($path, "r"); // Ouverture en lecture du fichier

        $params = []; //Tableau de paramètres

        // Lecture du fichier ligne par ligne
        while ($line = fgets($file)) {

            //Récupération des paramètres
            $lineSplit = explode("=", $line); // (Ex: '['host','localhost'])

            $key = $lineSplit[0]; // Nom du paramètre (Ex: 'host')
            $value = rtrim($lineSplit[1]); // Valeur du paramètre (Ex: 'localhost')

            $params[$key] = $value; // Ajout du paramètre au tableau (Ex: 'host' => 'localhost')

        }

        fclose($file); // Fermeture du fichier

        // Affectation des attributs depuis le tableau de paramètres récupéré
        self::$_host = $params["host"];
        self::$_dbname = $params["dbname"];
        self::$_user = $params["user"];
        self::$_password = $params["password"];

    }
}