<?php

class UtilisateurManager
{
    public static function add(Utilisateur $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("INSERT INTO utilisateurs (IdUtilisateur,Login, NomUtilisateur, PrenomUtilisateur, MotdePasse, Role, idMatiere) VALUES (:IdUtilisateur, :Login, :NomUtilisateur, :PrenomUtilisateur, :MotdePasse, :Role, :idMatiere)");
        $q->bindValue(":IdUtilisateur", $obj->getIdUtilisateur());
        $q->bindValue(":Login", $obj->getLogin());
        $q->bindValue(":NomUtilisateur", $obj->getNomUtilisateur());
        $q->bindValue(":PrenomUtilisateur", $obj->getPrenomUtilisateur());
        $q->bindValue(":MotdePasse", $obj->getMotdePasse());
        $q->bindValue(":Role", $obj->getRole());
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->execute();
    }

    public static function update(Utilisateur $obj)
    {
        $db = DbConnect::getDb();
        $q = $db->prepare("UPDATE utilisateurs SET Login=:Login, NomUtilisateur=:NomUtilisateur, PrenomUtilisateur=:PrenomUtilisateur, MotdePasse=:MotdePasse, Role=:Role, idMatiere:=idMatiere WHERE  IdUtilisateur=:IdUtilisateur");
        $q->bindValue(":IdUtilisateur", $obj->getIdUtilisateur());
        $q->bindValue(":Login", $obj->getLogin());
        $q->bindValue(":NomUtilisateur", $obj->getNomUtilisateur());
        $q->bindValue(":PrenomUtilisateur", $obj->getPrenomUtilisateur());
        $q->bindValue(":MotdePasse", $obj->getMotdePasse());
        $q->bindValue(":Role", $obj->getRole());
        $q->bindValue(":idMatiere", $obj->getidMatiere());
        $q->execute();
    }
    public static function delete(Utilisateur $obj)
    {
        $db = DbConnect::getDb();
        $db->exec("DELETE FROM utilisateurs WHERE IdUtilisateur=" . $obj->getIdUtilisateur());
    }

    public static function findById($id)
    {
        $db = DbConnect::getDb();
        $id = (int) $id;
        $q = $db->query("SELECT * FROM utilisateurs WHERE IdUtilisateur=$id");
        $results = $q->fetch(PDO::FETCH_ASSOC);
        if ($results != false) {
            return new Utilisateur($results);
        } else {
            return false;
        }
    }

    public static function get($pseudo)
    {

        if(strpos ( ucfirst($pseudo) , "DELIMITER" ) || strpos ( ucfirst($pseudo) , ";" )) {
            return false;
        }

        $db = DbConnect::getDb();
        $q = $db->prepare("SELECT * FROM utilisateurs WHERE Login=:Login");
        $q->bindValue(":Login", $pseudo);
        $q->execute();
        $results = $q->fetch(PDO::FETCH_ASSOC);
        if ($results != false) {
            return new Utilisateur($results);
        } else {
            return false;
        }
    }

    public static function getList()
    {
        $db = DbConnect::getDb();
        $utilisateurs = [];
        $q = $db->query("SELECT * FROM utilisateurs");
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $utilisateurs[] = new Utilisateur($donnees);
            }
        }
        return $utilisateurs;
    }


    public static function getListEnseignants()
    {
        $db = DbConnect::getDb();
        $utilisateurs = [];
        $q = $db->query("SELECT * FROM utilisateurs WHERE Role=1");
        while ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {
            if ($donnees != false) {
                $utilisateurs[] = new Utilisateur($donnees);
            }
        }
        return $utilisateurs;
    }
}
