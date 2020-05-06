<?php

function jmweb() {
    wp_enqueue_style( 'jmweb', get_template_directory_uri() . '/style.css', array(), '1.0.0' , 'all' );
    wp_enqueue_style( 'jmweb_bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '1.0.0' , 'all' );
}

add_action('wp_enqueue_scripts', 'jmweb');
?>