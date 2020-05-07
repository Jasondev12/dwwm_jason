<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wpevalfront' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9`v6&qsz|%]wEX~O)00,BKJAvR=$p*e:`nbf$jkR:.`SUn|-S$65Z!haZj98B6F1' );
define( 'SECURE_AUTH_KEY',  '*B&CS`i$9S)sBS0G|h%)qC|K|IHJ0&:ETigwHjl%|viF0 wTvs+IQJX5c1qOP3=0' );
define( 'LOGGED_IN_KEY',    'cjOiS19=[=rYw=+</]C]Th+/*F+uVw/%sRaUCuaUz>1F/5hvUC H-`FbP;Y#5Y:^' );
define( 'NONCE_KEY',        ')2x_}~u/` l&d+~`^$R4woW9fv?o +fYL2541uXjl]g1PWuh0j)OpQGx1,/U!0r<' );
define( 'AUTH_SALT',        'V1[3=SAR2LnUaF)ZRa`|x#=wewL+ymXUEJ?vm1jsb[$_t(H<ZYytSt}Cwv21Q.(y' );
define( 'SECURE_AUTH_SALT', 'u(w%zrLXOsUs#pd]SP#l*=>>>c{CAP>~erpfi)yWmOOig].rjm#kRh&K{d^pWbfp' );
define( 'LOGGED_IN_SALT',   '}phii24@ts~S(e9EN-8].Z!F$57zX0I98$Tb&/|=/j$T#)BTFRw=wKmKe88-.b:,' );
define( 'NONCE_SALT',       '!PM$a0sg8~%BVhVWu0)xc=~NUq8SkUKkhWs>7Kgjf,dADmcWltE0N~ZV+qG=~58;' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wpeval_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
