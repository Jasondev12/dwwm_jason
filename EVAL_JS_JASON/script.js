// VARIABLES
var capital ; // capital emprunte
var duree ;  // duree d'emprunt
var taux ;  // taux mensuel
var mensualite ;  // mensualite de remboursement

let input = document.querySelectorAll("#calcul");
let error = document.querySelectorAll('p');

for (let i = 0; i < input.length; i++) {
    error[i].style.display = "none";
  }

// Etape 1 - Verification utilisateur entre un nmbre positif
function verifier(nom, valeur){
    i = new Number(0);
    if (isNaN(valeur) == true){
        alert("La valeur n'est pas un nombre :" +valeur);
        return 1;
    }
    if (nom == "taux") {
        if(valeur <0 ){
            alert("le taux doit être >= 0%");
            return 1;
        }
        if (valeur > 30){
            alert("le taux doit être <= 30%");
            return 1;
        }
        else if (nom == "duree"){
            // durée sup ou egal à 1 mois
            if (valeur < 1./12.){
                alert ("la durée doit être > à 1 mois");
                return 1;
            }
            if (valeur >100){
                alert("la durée doit être <=100 ans");
                return 1;
            }
        }
    }
    return 0;
}

function controle(nom){
    chiffre = new Number(0);
    if(nom != "capital"){
        chiffre = verifier("capital", document.formulaire.capital.value);
    }
    if(nom != "taux"){
        chiffre = verifier("taux", document.formulaire.taux.value);
    }
    if(nom != "emprunt"){
        chiffre = verifier("cemprunt", document.formulaire.emprunt.value);
    }
    if(nom != "mensualite"){
        chiffre = verifier("mensualite", document.formulaire.mensualite.value);
    }
    if(nom != "couttotal"){
        chiffre = verifier("couttotal", document.formulaire.couttotal.value);
    }

}

function calculmensualite(){
    Mensulalite = (capital * taux/12)/(1 - Math.pow(1 + taux/12, -nbMois))
}