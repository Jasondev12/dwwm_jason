// NOMBRE MAGIQUE INVERSE
var nb = null; //numero aleatoire
var limiteMax = 100; //limite max
var limiteMin = 1; //limite min
do{
    nb = parseInt(Math.random() * (limiteMax - limiteMin) + limiteMin); // choix du nombre aleatoire
    alert("Lordinateur propose " + nb);
    console.log("L'ordinateur propose " + nb);

    choix = prompt("Plus petit (-), plus grand (+) ou correct (*) ?");

    if(choix == "+"){ // si les réponse est plus grande alors on change limitemin par le nb choisi par lordi
        limiteMin = nb;
    }
    else if(choix == "-"){ // identique au + mais avec la max si le nombre est plus petit
        limiteMax = nb;
    }
    console.log("l'ordinateur va chercher entre" + limiteMin + " et " + limiteMax);
}while(choix != "*");
alert("L'ordinateur a trouvé le bon numéro.Félicitations !!");