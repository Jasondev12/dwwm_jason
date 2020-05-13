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
define( 'DB_NAME', '' );


/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', '' );


/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );


/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', '' );


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
define( 'AUTH_KEY',         'yp/!>#p))CBS2>gKz4KgDV=|-S3#!nf,&;aQV3v*a<S)#3eq<BX|M#|O(ZOST~!m' );

define( 'SECURE_AUTH_KEY',  '~chi^}hH5v63bXgBKHQ>p#P2wE=yJrtbk4ay$@B7}FzL)oe!cgX78x>&%asn*tB9' );

define( 'LOGGED_IN_KEY',    '/}o6L|;~IdezVHTYF/1-q}~5,@GgX4=^<~v<85<#ZrVm,1PvnY@n-E`p^ayn]P9@' );

define( 'NONCE_KEY',        'D8g.Ol+W{z0mpO6pB8PXDyN)oILf%t.IiC`<2N#5+`u!{8Y{]U?#}^%`>|B#wrPQ' );

define( 'AUTH_SALT',        '@HyX{>a=RpfYcE&rpA2PRfx>lq)0eoC).IhLs9[`xdsyyIN9OP)`)Vlg2,|bzuS?' );

define( 'SECURE_AUTH_SALT', 'kBv~Kl8uS/#$]sE^B)$<G(/Ouv%|@WGi_}zCMVdd,:/id^KfRrDpLZ+!qiNm>xHm' );

define( 'LOGGED_IN_SALT',   'B?Z@+Wh9I}|c-QzPYa$Cf%RYP>>DV~!qV0C*i[<TqSz$g$qEl+PuYc$gENZPw3gx' );

define( 'NONCE_SALT',       'pt,EOVC:kL:J~<NO#YG?U>`6(x@a)175r4Qep4$_zZ.aW=d@O+`]&:7eDTZG5L.A' );

/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wpevalback_';


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
