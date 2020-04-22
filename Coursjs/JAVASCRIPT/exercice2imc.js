function calculerIMC(poids, taille) {
    //Calculer la taille en mètres
    // let tailleCalculee = Math.pow((taille/100), 2);
    let resultat = poids / Math.pow((taille/100), 2);

    return resultat;
}

let poids = prompt("Quel est votre poids ? (en kg)");
let taille = prompt("Quel est votre taille ? (en cm)");

alert(calculerIMC(poids, taille));






