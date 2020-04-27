<?php

class DepartementManager
{
    public static function getListDepartement()
    {
        $db = DbConnect::getDb(); // Instance de PDO.
        // Retourne la liste de tous les Regions.

        $q = $db->query('SELECT idDepartement, libelleDepartement FROM departements WHERE idRegion=84  ORDER BY libelleDepartement');

        if ($donnees = $q->fetch(PDO::FETCH_ASSOC)) {//test si la requête renvoi des données
            do {
                $regs[] = new Departement($donnees);
            } while ($donnees = $q->fetch(PDO::FETCH_ASSOC));
            return $regs;
        } else {
            return null;
        }
    }
}
