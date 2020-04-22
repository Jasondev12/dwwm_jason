// => permet d'ajouter un élement à la variable "liste"
function ajoutDessert(nom) {
    if (nom != "") {
        liste.innerHTML += "<li>" + nom + "</li>";
        eventSuppression();
    }
}

// => permet de supprimer un élément à la variable "liste"
function supprimerDessert(e) {
    liste = document.getElementById("liste");
    liste.removeChild(e.target);
}

// => vérifie les changements de liste à chaque appel et ajoute un évènement "click" 
// qui appelle la fonction de suppression
function eventSuppression() {
    var eltListe = document.getElementsByTagName("li");

    for (let i = 0; i < eltListe.length; i++) {
        eltListe[i].addEventListener("click", supprimerDessert);
    }
}

// =====> on commence par déclarer la variable "liste"
var liste = document.getElementById("liste");

// appel du prompt quand on clique sur "ajout"
document.getElementById("ajout").addEventListener("click", function () {
    ajoutDessert(prompt("Quel dessert voulez-vous ajouter ?"));
});

// on met à jour la liste et les listeners
eventSuppression();