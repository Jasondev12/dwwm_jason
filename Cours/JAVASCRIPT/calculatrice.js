var nombreUn = parseFloat(prompt("Saisit le 1er nombre")); // chaine a convertir en nombre décimal
var nombreDeux = parseFloat(prompt("Saisit le 2eme nombre"));
var operateur = prompt("Saisit un operateur");
var result;
 
if (isNaN(nombreUn) || isNaN(nombreDeux)) // not a number
    {
    document.write("<p>Ceci n'est pas un nombre</p>");
    }
    else if ((operateur == "+") || (operateur == "addition")) {
        result = nombreUn + nombreDeux;
        document.write(result);
    }
    else if ((operateur == "-") || (operateur == "soustraction")) {
        result = nombreUn - nombreDeux;
        document.write(result);
    }
    else if ((operateur == "*") || (operateur == "multiplication")) {
        result = nombreUn * nombreDeux;
        document.write(result);
    }
    else if ((operateur == "/") || (operateur == "division")){
        result = nombreUn / nombreDeux;
        document.write(result);
        if (nombreDeux == "0"){
        document.write(" Erreur");
        }
    }
    else if ((operateur == "^") || (operateur == "puissance")){
        result = nombreUn ** nombreDeux;
        document.write(result);
    }
if ((operateur != "+") && (operateur != "-") && (operateur != "*") && (operateur != "/") && (operateur != "^") && (operateur != "addition") && (operateur != "soustraction") && (operateur != "multiplication") && (operateur != "division") && (operateur != "puissance")) {
    document.write("<p>Ceci n'est pas un operateur</p>");
}