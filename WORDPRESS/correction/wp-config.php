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
define( 'DB_NAME', "eval" );


/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', "root" );


/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', "root" );


/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', "localhost" );


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
define( 'AUTH_KEY',         '<kd7F /=ipm<g`UZ*B&PJEch$k4$f: lDmk/cz@7>_;N5J/fKg|Jc^d/XE=zdQwL' );

define( 'SECURE_AUTH_KEY',  '=`KyPoem0:/X`uXiHc<cCi@OZ],jnc7V.NKX++<kf|R}-gfTm,Rj*Kp>U=WMpv-f' );

define( 'LOGGED_IN_KEY',    '2G4U!%Ke[..%Zea7`ei<^u>B6$I[<h>=Ty49PU_-ee${Rs/ 5|%Y9H5Pq8n84c.<' );

define( 'NONCE_KEY',        'QO=K[$*/9Rs5Dh.fA+dwMdW-L1-%~JG45:z{AA]D#$j(7^LJ*THv,nJZgkS.~B;>' );

define( 'AUTH_SALT',        '8%X5jRUZSZB_vV!Ht23b& L.2PAD~5o+VtvAMaALz_K&ND|CXt>w^LjuX}oQ2lp+' );

define( 'SECURE_AUTH_SALT', '}pMc2mt]R>l=7JNABx&[&9T/&;W); e}o?CC-<depyuoc.`p$*6K,^J[nl[z$)i2' );

define( 'LOGGED_IN_SALT',   'e:r4BfU1#UiJX>_fTZ;eJks@YPT&d5#2;(7p&nrW:SVIm 9:)Z6A]kjTBeT`vJJo' );

define( 'NONCE_SALT',       'i:vOPI+p,d$9royvJ,sZf1EAXgdcxk]^)fRgW50g:G4nT]Er?%a !xh-&ty:3WS0' );

/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';


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
