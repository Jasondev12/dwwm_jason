<?php
class Matiere
{
/*******************************Attributs*******************************/
private $_idMatiere;
private $_LibelleMatiere;

/******************************Accesseurs*******************************/
public function getidMatiere()
{
 return $this->_idMatiere;
}
public function setidMatiere($_idMatiere)
{
 return $this->_idMatiere = $_idMatiere;
}
public function getLibelleMatiere()
{
 return $this->_LibelleMatiere;
}
public function setLibelleMatiere($_LibelleMatiere)
{
 return $this->_LibelleMatiere = $_LibelleMatiere;
}

/*******************************Construct*******************************/
public function __construct(array $options = [])
    {
        if (!empty($options))
        {
            $this->hydrate($options);
        }
    }

    public function hydrate($data)
    {
        foreach ($data as $key => $value) {
            $methode = "set" . ucfirst($key);
            if (is_callable(([$this, $methode])))
            {
                $this->$methode($value);
            }
        }
    }

/****************************Autres méthodes****************************/
public function toString() 
{ 
 return $this->getidMatiere() . $this->getLibelleMatiere() ;
}

}