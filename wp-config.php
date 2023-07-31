<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'YUd3f1Uw+ugN73kBLu5XRgPQW3LzkEp81ilEy4bNRVRnN8a6ZyOAnTwzGqv/feLu/hvGcNtnyjByDOOTPRBn/A==');
define('SECURE_AUTH_KEY',  'j/eYO8zJeR84noqgX1fFIxnQZ163HYl+HiDru04/tYCvoRgWRz9nrtL6eNhs1aaGvAqlSM19qVPyl5uhItkH/A==');
define('LOGGED_IN_KEY',    'Nc+Qn6WUhLJRceUvn+tAKO/FooApZttnTdNv1ZaP9y0G2YmJsR2dKQ7oqQlsKkunnt4UziSPc4qwFbO2B7siIA==');
define('NONCE_KEY',        'RXDYrWCuSL4rIneqYdq6YYfIPctv6qySTdXYdvf306LXbBoRskU/LhD3BbPE2ugCYdm1VksgwM0/o3SCXPIvdA==');
define('AUTH_SALT',        '4PpO/0ABgxI7MO2jHMDsM6KTuzDQL8uhAXJsCId3weIcdJVPJ5O4PPyr6gs4OotCtBYjpnATpiuugaSoBfbuiw==');
define('SECURE_AUTH_SALT', 'x8tInJSr1DmIHUh/cDOUk7NQ/X6ppCpJA7RIggJU9YNO3SMY1B7o3vRmAxTdqUAqdFWiBIOfpy+pBxqZcpgwyw==');
define('LOGGED_IN_SALT',   'jXD708mVaWGuC3XIpLVheYyJ9X4FznD7T2SrshAQkemkYg0KgX+BnyxTJahxQYtgOPCZELFh5HO6wrO6RFKXfw==');
define('NONCE_SALT',       'PdUv1MmX9MQFc2vzGdbvr/DRiHF9OxGLCDNBwuWswIpaVq9y4PI4YDGbpjrT8LaHdnlEaCUioIMRcrUedPW3Qg==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
