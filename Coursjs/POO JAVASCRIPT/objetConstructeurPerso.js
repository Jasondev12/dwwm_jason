//let mark = {
//    prenom : "Mark",
//    nom : "Zuckerberg",
//    email : "mark@facebook.com",
//
//    sePresenter : function(){
   //  }
//}

// On crée une fonction constructeur pour nos utilisateurs
function Utilisateur(prenom, nom, email){
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;

    this.sePresenter = () => {
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse mail " + this.email);
    }
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com")

mark.poste = "PDG de facebook";

function Logement(type, annee, placeDeParking, proprietaire){
    this.type = type;
    this.annee = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire = proprietaire;
};

var appartementA = new Logement('Appartement', 2014, true, mark); // Mark est un objet
console.log(appartementA.proprietaire.prenom);
console.log(appartementA);
//console.log(mark.prenom);
//console.log(bill.prenom);
//console.log(mark); // objet
//mark.sePresenter();
//bill.sePresenter();