<?php

class Utilisateur{
    /*******************************Attributs*******************************/
    private $_IdUtilisateur;
    private $_Login;
    private $_NomUtilisateur;
    private $_PrenomUtilisateur;
    private $_MotdePasse;
    private $_Role;
    private $_idMatiere;

    /******************************Accesseurs*******************************/

    public function getIdUtilisateur()
    {
        return $this->_IdUtilisateur;
    }

    public function setIdUtilisateur($_IdUtilisateur)
    {
        $this->_IdUtilisateur = $_IdUtilisateur;
    }

    public function getLogin()
    {
        return $this->_Login;
    }

    public function setLogin($_Login)
    {
        $this->_Login = $_Login;
    }

    public function getNomUtilisateur()
    {
        return $this->_NomUtilisateur;
    }

    public function setNomUtilisateur($_NomUtilisateur)
    {
        $this->_NomUtilisateur = $_NomUtilisateur;
    }

    public function getPrenomUtilisateur()
    {
        return $this->_PrenomUtilisateur;
    }

    public function setPrenomUtilisateur($_PrenomUtilisateur)
    {
        $this->_PrenomUtilisateur = $_PrenomUtilisateur;
    }

    public function getMotdePasse()
    {
        return $this->_MotdePasse;
    }

    public function setMotdePasse($_MotdePasse)
    {
        $this->_MotdePasse = $_MotdePasse;
    }

    public function getRole()
    {
        return $this->_Role;
    }

    public function setRole($_Role)
    {
        $this->_Role = $_Role;
    }

    public function getidMatiere()
    {
        return $this->_idMatiere;
    }

    public function setidMatiere($_idMatiere)
    {
        $this->_idMatiere = $_idMatiere;
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
        return $this->getIdUtilisateur . $this->getLogin . $this->getNomUtilisateur . $this->getPrenomUtilisateur . $this->getMotdePasse . $this->getRole . $this->getidMatiere;
    }


}