<?php

class MatiereManager
{
    public static function add(Matiere $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("INSERT INTO matieres (idMatiere,LibelleMatiere) VALUES (:idMatiere, :LibelleMatiere)");
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->bindValue(":LibelleMatiere", $obj->getLibelleMatiere());
        $q->execute();
    }

    public static function update(Matiere $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("UPDATE matieres SET LibelleMatiere=:LibelleMatiere,  WHERE idMatiere=:idMatiere");
        $q->bindValue(":LibelleMatiere", $obj->getLibelleMatiere());
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->execute();
    }
    public static function delete(Matiere $obj)
    {
        $db = DbConnect::getDb();
        $db->exec("DELETE FROM matieres WHERE idMatiere=" . $obj->getidMatiere());
    }

    public static function findById($id)
    {
        $db = DbConnect::getDb();
        $id = (int) $id;
        $q = $db->query("SELECT * FROM matieres WHERE idMatiere=$id");
        $results = $q->fetch(PDO::FETCH_ASSOC);
        if ($results != false) {
            return new Eleve($results);
        } else {
            return false;
        }
    }

    public static function getList()
    {
        $db = DbConnect::getDb();
        $eleves = [];
        $q = $db->query("SELECT * FROM matieres");
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $eleves[] = new Eleve($donnees);
            }
        }
        return $eleves;
    }
}
