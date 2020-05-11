var part = 0; // max 50%
var situation = prompt("Etes-vous célibataire ou marié ? (c/m) ");
var enfant = prompt("Veuillez indiquer le nombre d'enfant(s) a votre charge : ");
var salaire = prompt("Veuillez indiquer votre salaire mensuel : ");

// pour chaque enfant, on ajoute 10% de partipation
for (let nbE = 0; nbE < enfant; nbE++) {
    part += 10;
}
// selon si on est célibataire ou marié
if (situation == "c") {
    part += 20
}
else {
    part += 25
}
// si le salaire est faible, on retire 10% de partipation
if (salaire < 1200) {
    part += 10;
}
// si la participation dépasse 50%, on change la valeur à 50
if (part > 50) {
    part = 50;
}
alert("Votre participation est de : "+part+" %");
var repas = prompt("Veuillez indiquer le prix de votre repas: ");
var result = (repas)*part/100;
alert("Le montant de votre repas après participation sera de : "+result+" €");