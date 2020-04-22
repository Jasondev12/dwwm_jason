function nbVoyelles(mot)
{
    var mot = prompt('Donnez une phrase');
    return mot.length = mot.replace(/[aeiouyàéèîï]+/g, '').length;
}

var choix = prompt("Entrez votre option");

switch (choix)
{
    case "1" :
        var nb = prompt("Choisissez un nombre : ");
        tableMultiplication(parseInt(nb));
        break;

    case "2" :
        var nb = prompt("Entrez des nombres entiers (0 arretera la saisie)");
        var somme = parseInt(nb);
        var compteur = 0;
        somMoy(nb, somme, compteur);
        break;

    case "3" :
        var phrase = prompt("Entrez une phrase : ");
        var lettre = prompt("Entrez une lettre à rechercher dans la phrase : ");
        var compteur = nbLettre(phrase, lettre);
        document.write("<br> Le nombre de " + lettre + " dans la phrase est de : " + compteur);
        break;

}