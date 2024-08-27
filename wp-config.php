<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myfirstsite' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<f#8?%EAfoFmeJfMWo{GxaH ufTU2:{wy[(]|i60wz},t=0fNQrN%;v:El{w%>Q ' );
define( 'SECURE_AUTH_KEY',  'pd/+j]X{vn?7Zc:X<<<QbV5tg,EZ+9]M6GZ7oit`lm!*u-xla_$JG{WE:;%^W4-c' );
define( 'LOGGED_IN_KEY',    '.d.n;m>H@a[%Oq8}6rVS+pdO,[M-{Hg2-P/qlij /.`-fmU{jH~T.=T3bYbS&T7x' );
define( 'NONCE_KEY',        '8*nKlTDMAV%;^}P&!Wwtk0M85,BOzkJ|eHJt0&MJe(Y/E9o8kv-QH1,#u^o=@TK-' );
define( 'AUTH_SALT',        'FO#*A#r,{ e4n;^-$9(-,~K{BNQJO-%A)[7-2J?+PW)D83H;H|aav$dX>,jDPq:3' );
define( 'SECURE_AUTH_SALT', 'v4bPm`F*<@5ur,m2nEQR`~8pP9jXSj~`?d>UkI[.LVx*gS o!KT^*8DfBS}mXU7!' );
define( 'LOGGED_IN_SALT',   'k(?W;di7 RP&>lH@CYC}Y5Qnn?C6t~_EaxD-N+?|Ia7;PpnyvV3lnXP=RJAbMa3v' );
define( 'NONCE_SALT',       '?x62.DmkvCV$bam2;R^E4.QhiJz|+LH8s]m[byzL3V!*s]^@vs`aELSYWrI5P_rY' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'myfirstsite';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
