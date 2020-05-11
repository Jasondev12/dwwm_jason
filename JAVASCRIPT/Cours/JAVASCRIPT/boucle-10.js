function nbrPremier(nbr) {
    for(let i = 2; i < nbr; i++){
        if(nbr%i === 0)
        {
        return false;
        }
    }
    return true;
  }
  var nombre = prompt("Entrez un nombre");
  if (nbrPremier(parseInt(nombre)))
  document.write("Ce nombre est premier")
  else
  document.write("ce nombre n'est pas premier");
