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
define( 'DB_NAME', 'wp1' );

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
define( 'AUTH_KEY',         'z-U~ulsG{R^F1p-uU.KiVMAEI@gT!!`V Vr?7g(L#3u@^Y&#KLOD5ao>b%Q67b8$' );
define( 'SECURE_AUTH_KEY',  '7ryz[9u,T6l~~XflkyxM^y.p5fP?92~W$!H3C%k8*Ad LSGCl@TtxJDSZbQSClsF' );
define( 'LOGGED_IN_KEY',    '+Yi[.;m6eQFJGF:^JE+vnZEErQ*PiX[Lhh[{~*NhdtYbJ m:j|5WT#4{7g?!CND]' );
define( 'NONCE_KEY',        '_9DyL7-nX3J>af0ge?6, <K,_yw>}FjOOYqJ]7]{c<`^u}LG?e@!Q@}6C*d+%m|*' );
define( 'AUTH_SALT',        'm3m`oyv!m&;qZIrWcJ]OD`3(KC.u5wcc<t~@%>f43j!s!C9@[&CG=o.W]H#r_BDA' );
define( 'SECURE_AUTH_SALT', '-/.V*dh0fR#oJ?,lLg%burYuUrM3vwMY5c|T26HgzGM-q.iP>$nrk^wK^qMj9oRN' );
define( 'LOGGED_IN_SALT',   '@#X94-.U0%NNCsM&y#rp&|1U:B{|}MtPGpv8)cvNFhw;BS*O&3o1DA@{MNiTQ/DE' );
define( 'NONCE_SALT',       '}w]9VQQU@AMN]<^DwCGLWOxr1q8~DAc@kSr]AB4pvB#bKq.<8!l;V1xE{vk6RG<`' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp1_';

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
