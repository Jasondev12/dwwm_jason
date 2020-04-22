// =====> Paragraphes 

// on liste les P
var listeP = document.getElementsByTagName("p");

// pour chaque paragraphe, on ajoute un évènement click
for (let i = 0; i < listeP.length; i++) {
    listeP[i].addEventListener("click", function(e) {
        changerCouleur(e.target);
    });
}

function changerCouleur(obj) {
    // on recupère la couleur
    var color = obj.style.color;
    console.log(color);

    switch (color) {
        case "black":
            obj.style.color = "purple";
            break;

        case "purple":
            obj.style.color = "black";
            break;

        default:
            obj.style.color = "purple";
            break;
    }
}

// =====> Titres

// on liste les titres
var listeTag = ["h1", "h2", "h3"];

// pour chaque balise de titre
for (let i = 0; i < listeTag.length; i++) {

    console.log("B1")

    // on liste tous les titres
    let listeTitre = document.getElementsByTagName(listeTag[i]);

    // pour chaque titre
    for (let j = 0; j < listeTitre.length; j++) {

        console.log("B2")

        // ajoute un évènement click
        listeTitre[j].addEventListener("click", function(e) {

            // pour chaque titre
            for (let k = 0; k < listeTitre.length; k++) {

                console.log("B3")

                // on cherche la couleur
                let color = listeTitre[k].style.color;

                // switch du changement de couleur
                switch (color) {
                    case "black":
                        listeTitre[k].style.color = "red";
                        console.log("ok")
                        break;
                    case "red":
                        listeTitre[k].style.color = "yellow";
                        console.log("ok")
                        break;
                    case "yellow":
                        listeTitre[k].style.color = "black";
                        console.log("ok")
                        break;
                    default:
                        listeTitre[k].style.color = "red";
                        console.log("ok");
                        break;
                }
            }
        }); // fin de la fonction
    } 
}