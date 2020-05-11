<?php
/*
Plugin Name: Hello World
Description: ecrit Hello World
Author: Jason
Version: 1.0
*/
class HelloWorld_Plugin{
public function __construct(){
include_once plugin_dir_path(__FILE__).'/helloclass.php';
new HelloClass();
}
}
new HelloWorld_Plugin();