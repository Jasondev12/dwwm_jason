// Permet d'ajouter un élément à la variable liste

function ajoutDessert(nom){
    if(nom != ""){
        liste.innerHTML += "<li>" + nom + "</li>";
        eventSuppression();
    }
}

// Permet de supprimer un élément à la variable liste
function supprimerDessert(e){
    liste = document.getElementById("liste");
    liste.removeChild(e.target);
}

// verficiation des changements de la liste a chaue appel et ajoute l'evenement click
// qui appel la fonction de suppression
function eventSuppression(){
    var eltListe = document.getElementsByTagName("li");
    for(let i = 0; i<eltListe.length;i++){
        eltListe[i].addEventListener("click", supprimerDessert);
    }
}

// declaration de la variable liste
var liste = document.getElementById("liste");

// appel du prompt au clique sur ajout
document.getElementById("ajout").addEventListener("click", function(){
    ajoutDessert(prompt("Quel dessert voulez-vous ajouter ?"));
});

// mise a jour liste
eventSuppression();