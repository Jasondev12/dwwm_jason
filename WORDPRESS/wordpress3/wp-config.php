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
define( 'DB_NAME', 'wp3' );

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
define( 'AUTH_KEY',         'X|Q`p^v@2Vf{s>%*otc.UFficG-kurA,|>H:3BuyuF4aE(cDC2SlqjoSa.B(/vl{' );
define( 'SECURE_AUTH_KEY',  'cujC>,/Vw~[EikVpME1)j!Zi66sy.OMKcVHLIrx61Ki8?(Y]iI3YYupP1K[O)K]|' );
define( 'LOGGED_IN_KEY',    'hfY.D]0*>Kbs`b|JQEM58j5_gI6z=ei5<2>!0RL0)$15{E I5*qKvQM*IQ0$m@Z@' );
define( 'NONCE_KEY',        '?!08T5,7WHs|Ld5,w.[`M3s!Hy3h:>5vyhU&|wq1+wT({?@8{U6oGCfk%%X%-+pL' );
define( 'AUTH_SALT',        'V)h6MV4JvNI/Rtj4un_xC*xuoo3644)Mk8y_CtJMfUx.g`?W%aRO0Ur3<JE&`(k{' );
define( 'SECURE_AUTH_SALT', 'Tyidv#]r!{t&Ai3$QEhr*HKgi>?0|Is]|]%#_5^)=Cl4c{6L{S]a%A+0^<T`LVRy' );
define( 'LOGGED_IN_SALT',   ';RP;N=JH050~|PPmq_+e;7?lW VSt*]yxYfRbkWs_<<JHyYp]qxx2/ppulN.,EG|' );
define( 'NONCE_SALT',       'an,k2]EkM(B,X7;,]2s_iIrLm>.i&%l!;L,D3qE:!ks88vU$g<3{CNR4)upYO.QY' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp3_';

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
