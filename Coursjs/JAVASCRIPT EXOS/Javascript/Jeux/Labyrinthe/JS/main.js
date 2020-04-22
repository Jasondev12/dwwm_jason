/* 
Changelog :
- nouvelles pages pour les règles et les commandes
- nouvelles commandes : ZQSD
- on ne peut plus se déplacer avant de cliquer sur "commencer" et que le timer démarre
- si le timer arrive à zéro, on doit recommencer depuis le début
- si victoire, le temps s'arrête (je pense à créer une sorte de score de fin)
- sélecteur de niveau (en fait ça change le fichier css du niveau)

Je suis plutôt content de moi, si tu veux jeter un œil : nicolas-deleforge.fr/games/labyrinth
Idées d'améliorations :
 - système de score selon le temps et le nb d'obstacles touchés
*/
// ====================================================================================================== Déclarations des variables

var sec = 120; // on détermine le compteur
var speed = 5; // vitesse de déplacement
var timer; // variable du timer

// ====================================================================================================== Appels des boutons

// ===> Bouton : contrôles
document.getElementById("controls").addEventListener("click", function () {
    var wControls = window.open("popup.html", "", "width=550,height=550");
    wControls.onload = function () {
        wControls.document.getElementById('main').innerHTML = "<h1>Comment jouer ?</h1><p>Le jeu peut se jouer de deux manières différentes :</p><ul><li>soit avec les touches <strong>Z, Q, S, D</strong></li><li>soit avec les touches du pavé numérique <strong>8, 4, 2, 6</strong></li></ul><p>Dans le premier cas :</p><ul><li>Z : haut</li><li>Q : gauche</li><li>S : bas</li><li>D : droite</li></ul><p>Dans le second cas :</p><ul><li>8 : haut</li><li>4 : gauche</li><li>2 : bas</li><li>6 : droite</li><li>7 : haut gauche</li><li>9 : haut droite</li><li>1 : bas gauche</li><li>3 : bas droite</li></ul>";
    }
});

// ===> Bouton : règles
document.getElementById("rules").addEventListener("click", function () {
    var wRules = window.open("popup.html", "", "width=550,height=550");
    wRules.onload = function () {
        wRules.document.getElementById('main').innerHTML = "<h1>Quel est le but du jeu ?</h1><p>Vous êtes le cube rose sur la gauche. Le but du jeu est de se déplacer vers l'arrivée - qui correspond au trait vert sur la droite - le plus rapidement possible.</p><h2>Quelques règles</h2><p>Vous perdez : </p><ul><li>1 seconde si vous touchez un élément noir</li><li>3 secondes si vous touchez un élément rouge</li><li>5 secondes si vous touchez un élément bleu</li></ul><p>Si le compteur tombe à 0, vous avez perdu!</p>";
    }
});

// ===> Bouton : jouer musique
document.getElementById("musicOn").addEventListener("click", function () {
    playSound("music", 0.5, true)
});

// ===> Bouton : arrêter musique
document.getElementById("musicOff").addEventListener("click", function () {
    stopSound("music")
});

// ===> Bouton : commencer à jouer
document.getElementById("play").addEventListener("click", function () {
    timer = setInterval(startTimer, 1000); // on démarre un interval qui fait appel à la fonction toutes les 1sec
    keyboard(); // on active les touches du clavier
});

// ===> Bouton : sélecteur de niveau
document.getElementById('level').addEventListener("change", function () { // on met un listener sur les changement du sélecteur
    levelChoice(this.selectedIndex + 1); // puis on donne la valeur de l'option à la fonction
});

// ====================================================================================================== Ambiance et affichage
// ====================================================> Gestion du son

// ===> Fonction : jouer un son
function playSound(div, volume, loop) {
    var audio = document.getElementById(div);
    audio.volume = volume;

    if (loop) {
        audio.loop = true;
    }

    audio.play();
}

// ===> Fonction : arrêter un son
function stopSound(div) {
    var audio = document.getElementById(div);
    audio.pause();
}

// ====================================================> Gestion du temps

function startTimer() {
    document.getElementById('time').innerHTML = "<strong>TEMPS RESTANT</strong> : " + sec + " secondes";
    sec--;

    if (sec < 0) { // si on arrive à 0
        document.getElementById("time").innerHTML = "Temps écoulé !";
        endGame(1);
    }
}

// ====================================================> Gestion du niveau

function levelChoice(level) {
    // on définit la nouvelle valeur selon le choix du joueur
    var newCss = 'CSS/level' + level + '.css';

    // on remplace le CSS
    var head = document.getElementsByTagName("HEAD")[0];
    head.childNodes[7].href = newCss;
}

// ====================================================> Gestion de la victoire ou de la défaite

function endGame(sit) {
    if (sit == 1) {
        alert("Désolé, tu n'es pas arrivé assez vite. La partie est terminée!")
    }
    else if (sit == 2) {
        clearInterval(timer);
        stopSound("music");
        alert("Bien joué, c'est gagné !\nIl te restait encore : " + sec + " secondes.");
    }

    location.reload();
}

// ====================================================================================================== Fonctionnement du jeu
// ====================================================> Gestion des touches de clavier

function keyboard() {
    document.addEventListener('keydown', function (event) {
        var event = event || window.event, // pour la compatibilite avec tous les navigateurs
            keyCode = event.keyCode;

        switch (keyCode) {
            // gauche
            case 100 : // 4 numpad
            case 81: // q
                move(-speed, 0);
                break;

            // haut
            case 104: // 8 numpad
            case 90: // z
                move(0, -speed);q
                break;

            // droite
            case 102: // 6 numpad
            case 68: // d
                move(speed, 0);
                break;

            // bas
            case 98: // 2 numpad
            case 83: // s
                move(0, speed)
                break;

            // haut gauche
            case 103: // 7 numpad
                move(-speed, -speed);
                break;

            // haut droite
            case 105: // 9 numpad
                move(speed, -speed);
                break;

            // bas gauche 
            case 97: // 1 numpad
                move(-speed, speed);
                break;

            // bas droite
            case 99: // 3 numpad
                move(speed, speed);
                break;
        }
    });
}

// ====================================================> Gestion du déplacement

function move(pX, pY) {
    var move = true;

    var player = document.getElementById("player"); // joueur
    var stylePlayer = window.getComputedStyle(player, null); // css du joueur
    var pT = parseInt(stylePlayer.top); // joueur position X
    var pL = parseInt(stylePlayer.left); // joueur position Y
    var pW = parseInt(stylePlayer.width); // joueur largeur
    var pH = parseInt(stylePlayer.height); // joueur hauteur

    var allObstacles = document.querySelectorAll(".obstacle"); // on liste tous les obstacles
    allObstacles.forEach(function (unObstacle) {
        var styleObstacle = window.getComputedStyle(unObstacle, null); // css de l'obstacle
        var oT = parseInt(styleObstacle.top); // obstacle position X
        var oL = parseInt(styleObstacle.left); // obstacle position Y
        var oW = parseInt(styleObstacle.width); //obstacle largeur
        var oH = parseInt(styleObstacle.height); // obstacle hauteur
        var color = styleObstacle.backgroundColor; // couleur de l'obstacle

        move = move && collision(oT, oL, oW, oH, pT + pY, pL + pX, pW, pH, color);
    });

    if (move) {
        if (limit(pT + pY, pL + pX, pW)) {
            player.style.top = pT + pY + "px";
            player.style.left = pL + pX + "px";
        }
    }
}

// ====================================================> Gestion des collisions (et des différents résultats : dont la victoire)

function collision(oT, oL, oW, oH, pT, pL, pW, pH, color) {
    if (pL < oL + oW && pL + pW > oL && pT < oT + oH && pT + pH > oT) {
        switch (color) {
            case "rgb(0, 128, 0)":
                // si on touche l'arrivée, c'est gagné
                endGame(2);
                break;
            case "rgb(0, 0, 0)":
                // si on touche un mur, on perd 2sec
                sec -= 1;
                break;
            case "rgb(255, 0, 0)":
                // si on touche un obstacle rouge, on perd 5sec
                sec -= 3;
                break;
            case "rgb(0, 0, 255)":
                // si on touche un obstacle bleu, on perd 15sec
                sec -= 5;
                break;
        }
        playSound("soundCollision", 0.5, false);
        return false;
    }
    return true;
}

// ====================================================> Gestion des limites de l'écran

function limit(top, left, width) {
    var limitLeftTop = 0; // limite haut-gauche de la page
    var limitRight = window.innerWidth - width; // limite droite de la page
    var limitBottom = window.innerHeight - width; // limite bas de la page

    if (left < limitLeftTop || top < limitLeftTop || left > limitRight || top > limitBottom) {
        playSound("soundLimit", 1, false);
        return false;
    }
    return true;
}
