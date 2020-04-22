// recuperation des éléments du html
//création des variables
//récupération du body
var body = document.getElementById("body");
//récupération des inputs
var inputs = document.querySelectorAll("input");

//récupération des boutons et ajout des événements au click via la fonction change couleur
document.getElementById("btnRouge").addEventListener("click", function(){changeCouleur(255,0,0)});
document.getElementById("btnVert").addEventListener("click", function(){changeCouleur(0,255,0)});
document.getElementById("btnBleu").addEventListener("click", function(){changeCouleur(0,0,255)});

var couleurs = readCookie("couleurActuelle");

if(couleurs != null)
{
    //récupération des couleurs pour les stockers dans des tableaux
    tabCouleurs = couleurs.split(","); 
    changeCouleur(tabCouleurs[0], tabCouleurs[1], tabCouleurs[3]);
}

for(let i=0; i<3; i++)
    {{
    }
        inputs[i].addEventListener("change", function(){
            if(inputs[i].value >255)
            {
                inputs[i].value = 255;
            }
            changeCouleur(parseInt(inputs[0].value), parseInt(inputs[1].value), parseInt(inputs[2].value))
        });
    }


function changeCouleur(rouge, vert, bleu)
{
    //création du cookie
    createCookie("couleurActuelle", rouge + ", " + vert + ", " + bleu ,3);

    //définition de la couleur du body
    body.style.backgroundColor = "rgb("+ rouge + ", " + vert + ", " + bleu+")";

    //définition des couleurs pour chacuns des inputs
    inputs[0].value = rouge;
    inputs[1].value = vert;
    inputs[2].value = bleu;
};


  




