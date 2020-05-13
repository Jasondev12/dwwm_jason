<?php
class monimageWidget extends WP_Widget
{
    public function __construct(){
        parent::__construct('monimage', 'image', array('description' => 'Plugin qui change l\'image au survol de la souris'));
    }

    public function widget($args, $instance)
    {
        echo 'widget image';
    }
}