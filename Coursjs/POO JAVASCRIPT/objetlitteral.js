let mark = {
    prenom : "Mark", // propriété
    nom : "Zuckerberg",
    email : "mark@facebook.com",

    // A L'ANCIENNE
    sePresenter : function(){
        console.log("Bonjour, je m'appelle " + this.prenom);
    }
}

console.log(mark.prenom);
mark.sePresenter();

// Nouvelle méthode
function recevoirLesCoordonnees(){
    return{ latitude: 35, longitude: 139}
};

let coordonnees = recevoirLesCoordonnees();
console.log(coordonnees.latitude);
console.log(coordonnees.longitude);
