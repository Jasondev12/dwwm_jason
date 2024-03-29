<?php
class EleveManager
{
public static function add(Eleve $obj)
{
$db = DbConnect::getDb();
$q = $db->prepare("INSERT INTO eleves (NomEleve,PrenomEleve,Classe) VALUES (:NomEleve,:PrenomEleve,:Classe)");
$q->bindValue(":NomEleve", $obj->getNomEleve());
$q->bindValue(":PrenomEleve", $obj->getPrenomEleve());
$q->bindValue(":Classe", $obj->getClasse());
 $q->execute();
}

public static function update(Eleve $obj)
{

    var_dump($obj);
$db = DbConnect::getDb();
$q = $db->prepare("UPDATE eleves SET NomEleve=:NomEleve, PrenomEleve=:PrenomEleve, Classe=:Classe WHERE IdEleve=:IdEleve");
$q->bindValue(":NomEleve", $obj->getNomEleve());
$q->bindValue(":PrenomEleve", $obj->getPrenomEleve());
$q->bindValue(":Classe", $obj->getClasse());
$q->bindValue(":IdEleve", $obj->getIdEleve());
 $q->execute();
}

public static function delete(Eleve $obj)
{
$db = DbConnect::getDb();
$db->exec("DELETE FROM eleves WHERE IdEleve=" . $obj->getIdEleve());
}

public static function findById($id)
{
$db = DbConnect::getDb();
$id = (int) $id;
$q = $db->query("SELECT * FROM eleves WHERE IdEleve=$id");
$results = $q->fetch(PDO::FETCH_ASSOC);
if ($results != false) {
return new Eleve ($results);
 }else {
return false;
}
}

public static function getList()
{
$db = DbConnect::getDb();
$eleves = [];
$q = $db->query("SELECT * FROM eleves");
while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
if ($donnees != false) {
$eleves[] = new Eleve($donnees);
}
}
return $eleves;
 }

}