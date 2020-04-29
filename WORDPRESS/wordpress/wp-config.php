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
define( 'AUTH_KEY',         '^A|#~du[S6O9^Pt&R-iT+blx3-|@lQ>9=oMF&Zs;8@bbytD671)<1aZ&Z^4geGl9' );
define( 'SECURE_AUTH_KEY',  'E,xe()*</nYhqtM#wG65cRokEBY=/@$E_(^*Q8vGQ*bD+DlsPR|7wl?z5^ _zqwy' );
define( 'LOGGED_IN_KEY',    ';w^lbU:81*]3=+CLd;pTCx3S^$Ob#Y>:|&I J. S~&{Bq;3E8)ja--xjk.lPNoh@' );
define( 'NONCE_KEY',        '0uSW(yQ{~ m/I+K&,IH.0zyG L%_}rTr*:4VIl68Mu;{J=K1*W?bEQ?;aN`pmO.t' );
define( 'AUTH_SALT',        'h8j{&+#h3l[=GA3+YWsJFgxX^A .5d`2zHgvJKz<aXEVKQA|K+X65KyP^/TG5~`(' );
define( 'SECURE_AUTH_SALT', 'X9HC4Of1q,s99f1|t/Y++,OtM83!mtQZ}Rq6!Ldk^x95dNAKE8nn5SEQaD4]Ws g' );
define( 'LOGGED_IN_SALT',   'N>5T=; Pl:s%&7k&8Zp@uNXG7.C0l3(2Y`ek:b*#0m-iD(,itSEq>rjq7zz=*;,K' );
define( 'NONCE_SALT',       '+;iRRk)EL?YR;EDp$r0&P(;iD8C;uIaFX3/md,]Ee?ARF }>JB3KeCGVamWo=zC^' );
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
