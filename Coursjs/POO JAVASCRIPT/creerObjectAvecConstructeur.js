function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
  }
  Utilisateur.prototype.sePresenter = function() {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
  }
  
  // On crée un objet
  var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
  var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
  console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor
  
  mark.sePresenter();
  
  // Créer un objet avec Object()
  var monObjet = new Object();
  monObjet.titre = "Le titre de l'objet";

  console.log(monObjet);