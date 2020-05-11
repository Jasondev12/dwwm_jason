<?php
class SuiviManager
{
    public static function add(Suivi $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("INSERT INTO suivis (idMatiere,IdEleve,Note,Coefficient) VALUES (:idMatiere,:IdEleve,:Note,:Coefficient)");
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->bindValue(":IdEleve", $obj->getIdEleve());
        $q->bindValue(":Note", $obj->getNote());
        $q->bindValue(":Coefficient", $obj->getCoefficient());
        $q->execute();
    }

    public static function update(Suivi $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("UPDATE suivis SET idMatiere=:idMatiere, IdEleve=:IdEleve, Note=:Note, Coefficient=:Coefficient WHERE IdSuivi=:IdSuivi");
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->bindValue(":IdEleve", $obj->getIdEleve());
        $q->bindValue(":Note", $obj->getNote());
        $q->bindValue(":Coefficient", $obj->getCoefficient());
        $q->bindValue(":IdSuivi", $obj->getIdSuivi());
        $q->execute();
    }

    public static function delete(Suivi $obj)
    {
        $db = DbConnect::getDb();
        $db->exec("DELETE FROM suivis WHERE IdSuivi=" . $obj->getIdSuivi());
    }

    public static function findById($id)
    {
        $db = DbConnect::getDb();
        $id = (int) $id;
        $q = $db->query("SELECT * FROM suivis WHERE IdSuivi=$id");
        $results = $q->fetch(PDO::FETCH_ASSOC);
        if ($results != false) {
            return new Suivi($results);
        } else {
            return false;
        }
    }

    public static function getList()
    {
        $db = DbConnect::getDb();
        $suivis = [];
        $q = $db->query("SELECT * FROM suivis");
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $suivis[] = new Suivi($donnees);
            }
        }
        return $suivis;
    }

    public static function getListMatiere($idMatiere)
    {
        $db = DbConnect::getDb();
        $idMatiere = (int) $idMatiere;
        $suivis = [];
        $q = $db->prepare("SELECT * FROM suivis WHERE idMatiere=:idMatiere");
        $q->bindValue(":idMatiere",$idMatiere);
        $q->execute();
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $suivis[] = new Suivi($donnees);
            }
        }
        return $suivis;
    }
}
