function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
    
    this.sePresenter = () => {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
    }
  }
  
  // On crée un objet
  var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
  var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
  

  console.log(mark);