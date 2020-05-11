<?php

class Eleve{
    /*******************************Attributs*******************************/
    private $_IdEleve;
    private $_NomEleve;
    private $_PrenomEleve;
    private $_Classe;

    /******************************Accesseurs*******************************/

    public function getIdEleve()
    {
        return $this->_IdEleve;
    }

    public function setIdEleve($_IdEleve)
    {
        $this->_IdEleve = $_IdEleve;
    }

    public function getNomEleve()
    {
        return $this->_NomEleve;
    }

    public function setNomEleve($_NomEleve)
    {
        $this->_NomEleve = $_NomEleve;
    }

    public function getPrenomEleve()
    {
        return $this->_PrenomEleve;
    }

    public function setPrenomEleve($_PrenomEleve)
    {
        $this->_PrenomEleve = $_PrenomEleve;
    }

    public function getClasse()
    {
        return $this->_Classe;
    }

    public function setClasse($_Classe)
    {
        $this->_Classe = $_Classe;
    }

    /*******************************Construct*******************************/
    public function __construct(array $options = [])
    {
        if (!empty($options)) {
            $this->hydrate($options);
        }
    }

    public function hydrate($data)
    {
        foreach ($data as $key => $value) {
            $methode = "set" . ucfirst($key);
            if (is_callable(([$this, $methode]))) {
                $this->$methode($value);
            }
        }
    }

    /****************************Autres méthodes****************************/
    public function toString()
    {
        return $this->getIdEleve . $this->getNomEleve . $this->getPrenomEleve . $this->getClasse;
    }
}









