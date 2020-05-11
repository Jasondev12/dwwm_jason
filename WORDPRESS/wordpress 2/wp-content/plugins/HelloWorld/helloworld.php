<?php
/*
Plugin Name: Hello World
Description: Plugin qui enregistre les commentaires en bdd
Author: Martine
Version: 1.0
 */
class HelloWorld_Plugin
{
    public function __construct()
    {
        include_once plugin_dir_path(__FILE__) . '/helloClass.php';
        register_activation_hook(__FILE__, array('helloclass', 'install'));
        new HelloClass();
        
    }
}
new HelloWorld_Plugin();