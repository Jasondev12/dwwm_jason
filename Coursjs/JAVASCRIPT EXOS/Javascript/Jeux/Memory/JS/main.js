// ================================================================ Déclarations des variables

var nbFoundWin = 0; // nombre de paires pour gagner
var nbClick = 0; // nombre de clics
var nbFound = 0; // nombre de paires trouvées
var sec = 0; // on définit le compteur de seconde initial

var display = [];  // gère l'affichage des cartes -> 0 : recto, 1 : verso, -1 paire trouvée
var pictures = []; // liste des noms des fichiers images (en double)
var played = []; // gère les cartes jouées, played[0] et played[1] seront les deux cartes jouées
var listCards = [] // liste des cartes

game();

// ================================================================ Gestion des boutons

// Bouton : réinitialiser
document.getElementById("reinit").addEventListener("click", function () {
    reinit()
});

// Bouton : solution
document.getElementById("cheat").addEventListener("click", function () {
    cheat(listCards)
});

// ================================================================ Fonctions

// ===> Initialise la partie en demandant la difficulté, en mélangeant les cartes et en démarrant le timer
function game() {
    do { // on demande le niveau de difficulté
        var difficulty = prompt("Normal (1) ou difficile (2) ?")
    } while (difficulty != 1 && difficulty != 2);

    switch (difficulty) { // selon le niveau de difficulté, on donne des valeurs différentes à display, pictures et nbFoundWin
        case "1": // normal
            nbFoundWin = 8;
            break;

        case "2": // difficile
            nbFoundWin = 10;

            document.getElementsByTagName("header")[0].innerHTML = "Jeu du memory (mode difficile)"; // on change le titre

            listLines = document.querySelectorAll(".ligne"); // on liste toutes les classes "ligne"
            for (let line = 0; line < listLines.length; line++) { // pour chaque ligne
                listLines[line].innerHTML += '<img src="ressources/images/recto.png" alt="" />'; // on ajoute une carte
            }
            break;
    }

    for (let i = 0; i < nbFoundWin; i++) { // puis selon la difficulté, on remplit plus ou moins nos tableaux
        display.push(0);
        display.push(0);
        pictures.push(i + 1);
        pictures.push(i + 1);
    }

    var cards = document.getElementsByTagName("img"); // on liste tous les éléments img
    listCards = [...cards]; // puis on les ajoute dans un tableau

    // on mélange nos cartes
    shuffle(listCards);

    // pour chaque carte, on ajoute un évènement click qui fait appel à la fonction play
    for (let numCard = 0; numCard < listCards.length; numCard++) {
        listCards[numCard].addEventListener("click", function () {
            play(numCard);
        })
    };

    // on démarre le timer
    timer = setInterval(startTimer, 1000);
}

// ===> Gère le nombre de cartes retournées, le nouvel affichage des cartes et la victoire
function play(numCard) {
    // on ne peut pas jouer plus de deux cartes
    if (played.length < 2) {

        // si la carte est cachée
        if (display[numCard] == 0) {
            display[numCard] = 1 // on retourne la carte
            played.push(numCard) // on ajoute la carte jouée dans le tableau des cartes jouées

            nbClick++; // on augmente le nombre de clics
            document.getElementById("navClick").innerHTML = "Nombre de clics : " + nbClick;

            turn(numCard); // on tourne la carte
        }

        // si on a deux cartes jouées
        if (played.length == 2) {
            var newDisplay = 0 // on définit une nouvelle variable pour déterminer le nouvel affichage (de base cachée)

            if (pictures[played[0]] == pictures[played[1]]) { // si les deux cartes jouées sont identiques
                newDisplay = 2; // on rend les deux cartes non cliquables

                nbFound++; // on augmente le nombre de paires trouvées
                document.getElementById("navFound").innerHTML = "Nombre de paires trouvées : " + nbFound;

                if (nbFound == nbFoundWin) { // si il y a 8 paires de cartes trouvées alors la partie est gagnée
                    clearInterval(timer); // on arrête le timer
                    alert("Tu as réussi en " + nbClick + " clics et " + sec + " secondes! Essayes de faire mieux la prochaine fois :)") // et on affiche le message de victoire
                }
            }

            // on mets à jour le nouvel affichage pour les deux cartes jouées (soit cachée, soit de face parce que la paire est bonne)
            display[played[0]] = newDisplay;
            display[played[1]] = newDisplay;

            // au bout de 2sec, on retourne les cartes fache cachées comme elles ne sont pas identiques et on vide le tableau des cartes jouées
            setTimeout(function () {
                turn(played[0]);
                turn(played[1]);
                played = [];
            }, 2000);
        }
    }
}

// ===> Tourne les cartes recto, verso ou les laisse afficher par paire
function turn(numCard) {
    switch (display[numCard]) { // selon la situation actuelle de la carte
        case 0: // face cachée
            listCards[numCard].src = "ressources/images/recto.png";
            break;

        case 1: // face visible
            listCards[numCard].src = "ressources/images/" + pictures[numCard] + ".png";
            break;

        case 2: // paire trouvée
            listCards[numCard].style.opacity = "0.5";
    }
}

// ===> Compte le nombre de secondes depuis le début de la partie
function startTimer() {
    document.getElementById('navTime').innerHTML = "Temps joué : " + sec + " sec";
    sec++;
}

// ===> Rédemarre une partie
function reinit() {
    location.reload();
}

// ===> Affiche toutes les cartes et arrête la partie
function cheat(listCards) {
    clearInterval(timer); // on arrête le timer
    for (let numCard = 0; numCard < listCards.length; numCard++) {
        display[numCard] = 2; // on modifie le tableau d'affichage pour dire que les cartes sont retournées
        listCards[numCard].src = "ressources/images/" + pictures[numCard] + ".png"; // et on affiche toutes les cartes
    }
}

// ===> Mélange un tableau (Fisher-Yates)
function shuffle(array) {
    var j, x;
    var i = pictures; // on utilise la liste des images pour gérer la méthode d'aléatoire afin que les images soient entre 1 et 8, en double

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
}
