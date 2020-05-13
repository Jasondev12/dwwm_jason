<?php
/*
Plugin Name: monImage
Description: Plugin qui change l'image au survol de la souris
Author: Jason
Version: 1.0
 */


include_once plugin_dir_path( __FILE__ ).'/monimagewidget.php';

class monImage
{
    public function __construct()
    {
        add_action('widgets_init', function(){register_widget('monimageWidget');});
    }
}

 function changeImage(){
     echo '<div class="image"></div>';
 }

 // on déclare le widget
// Imprime les notifs de l'écran admin
add_action('admin_notices', 'changeImage');


 function imageAffichage(){
     echo'
        <style type="text/css">
        .img{
            background: url("WORDPRESS/Eval_CMS_Back/wp-content/plugins/monImage/CREATION.jpg");
        }
        .img:hover{
            background: url("WORDPRESS/Eval_CMS_Back/wp-content/plugins/monImage/CREATION2.jpg");
        }
        </style>
     ';
 }

 // Se déclenche dans le section head pour les pages admins
 add_action('admin_head', 'imageAffichage');