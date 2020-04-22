function changerCouleur(obj) {
  // Recuperer la couleur actuelle de l'objet
  var color = obj.style.color;
  // En fonction de la couleur actuelle, changer la couleur
  switch (color) {
    case "black":
      obj.style.color = "pink";
      break;
    case "pink":
      obj.style.color = "black";
      break;
    default:
      obj.style.color = "pink";
      break;
  }
}

// Recuperer les paragrapges
var p = document.getElementsByTagName("p");
// pour chaques paragraphes nous ajoutons l'evenement
for (let i = 0; i < p.length; i++) {
  // ajouter du click
  p[i].addEventListener("click", function(e) {
    changerCouleur(e.target);
  });
}
// Balises titres
var titresTag = ["h1", "h2", "h3"];
//pour chaques balises titre
for (let i = 0; i < titresTag.length; i++) {
  //titres correspondants à la balise
  let titres = document.getElementsByTagName(titresTag[i]);
  // pour chaques titres
  for (let j = 0; j < titres.length; j++) {
    //ajout evenement click
    titres[j].addEventListener("click", function(e) {
      for (let k = 0; k < titres.length; k++) {
        //couleur du texte
        let color = titres[k].style.color;
        switch (color) {
          case "black":
            titres[k].style.color = "pink";
            break;
          case "pink":
            titres[k].style.color = "yellow";
            break;
          case "yellow":
            titres[k].style.color = "black";
            break;
          default:
            titres[k].style.color = "pink";
            break;
        }
      }
    });
  }
}
