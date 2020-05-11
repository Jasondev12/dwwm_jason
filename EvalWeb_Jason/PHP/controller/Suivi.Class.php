<?php

class Suivi{
    /*******************************Attributs*******************************/
    private $_IdSuivi;
    private $_idMatiere;
    private $_IdEleve;
    private $_Note;
    private $_Coefficient;

    /******************************Accesseurs*******************************/

    public function getIdSuivi()
    {
        return $this->_IdSuivi;
    }

    public function setIdSuivi($_IdSuivi)
    {
        $this->_IdSuivi = $_IdSuivi;
    }

    public function getidMatiere()
    {
        return $this->_idMatiere;
    }

    public function setidMatiere($_idMatiere)
    {
        $this->_idMatiere = $_idMatiere;
    }

    public function getIdEleve()
    {
        return $this->_IdEleve;
    }

    public function setIdEleve($_IdEleve)
    {
        $this->_IdEleve = $_IdEleve;
    }

    public function getNote()
    {
        return $this->_Note;
    }

    public function setNote($_Note)
    {
        $this->_Note = $_Note;
    }

    public function getCoefficient()
    {
        return $this->_Coefficient;
    }

    public function setCoefficient($_Coefficient)
    {
        $this->_Coefficient = $_Coefficient;
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
        return $this->getIdSuivi . $this->getidMatiere . $this->getIdEleve . $this->getNote . $this->getCoefficient;
    }

 
}