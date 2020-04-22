function calculeNbJeune() {
    var compteurj = 0;
    var compteurm = 0;
    var compteurv = 0;
    do {
        var age = prompt("Entrez , votre age (entrez un age >100 pour arrêter la saisie)");
        if (age < 20) {
            compteurj++;
        }
        else if (age < 41) {
            compteurm++;
        }
        else {
            compteurv++;
        }
    } while (age < 100)
    document.write("Le nombre de jeune est de : " + compteurj + " \n Le nombre d'age moyen : " + compteurm + " \nLe nombre de vieux : " + compteurv);
}
calculeNbJeune();