<?php

// Ce fichier sera inclus à chaque fois que l'on aura besoin d'acceder à la base de données.
// Il permet d'ouvrir la connection à la base de données
class DbConnect {

	private static $db;

	//Récupération du canal de connexion
	public static function getDb() {
		return DbConnect::$db;
	}

	//Initialisation du canal de connexion
	public static function init() {

		//Initialisation des paramètres
		Parameters::init();

		//Récupération des paramètres
		$host = Parameters::getHost();
		$dbname = Parameters::getDbname();
		$user = Parameters::getUser();
		$password = Parameters::getPassword();

		try {
			// Connexion grâce aux paramètres récupérés
			self::$db= new PDO ( 'mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password );
		} catch ( Exception $e ) {
			// En cas d'erreur, on affiche un message et on arrête tout
			die ( 'Erreur : ' . $e->getMessage () );
		}
		
	}
}