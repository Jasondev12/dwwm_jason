<!DOCTYPE html>
<html>

<head>
    <title>Les variables en PHP</title>
    <meta charset="utf-8/">
</head>

<body>
    <?php
    $departement = "var";
    $chiffre = 83;
    $pi = 3.14;
    $variable1 = true;
    $variable2 = false;
    echo "Le " . $departement . " est un département de France </br>";
    echo "Son département est le : " . $chiffre."<br/><br/><br/>";


    // OPERATIONS
    $nombre1 = 5;
    $nombre2 = 3;
    $addition = $nombre1 + $nombre2;
    $soustraction = $nombre1 - $nombre2;
    $multiplication = $nombre1 * $nombre2;
    $division = $nombre1 / $nombre2;
    $module = $nombre1 % $nombre2;

    echo  'Addition : ' .$addition."<br/>";
    echo  'Soustraction : ' .$soustraction."<br/>";
    echo  'Multiplication : ' .$multiplication."<br/>";
    echo  'Division : ' .$division."<br/>";
    echo  'Modulo : ' .$module."<br/>";
    echo $nombre1. '+' .$nombre2."<br/>";

$addition = 20;
$soustraction = $soustraction - $soustraction;
$multiplication = $addition;

echo 'Nouvelle valeur addition : ' .$addition. '<br/>';
echo 'Nouvelle valeur soustraction : ' .$soustraction. '<br/>';
echo 'Nouvelle valeur multiplication : ' .$multiplication. '<br/>';
?>
</body>

</html>