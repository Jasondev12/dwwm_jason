// ===> Fonctions

function Produit(x, y) {
    return document.write("Le produit de " + x + " et " + y +" est " + x * y);
}

function AfficheImg(image) {
    document.write ('<img src="+image+" alt= "" />');
}

// Produit(5,5);
// AfficheImg("image.jpg");

// ===================================================

// ===> Table de multiplication

// var x = prompt("X : ");

function TableMultiplication(x) {
    document.write("Table de " + x + " :<br />");
    for (let i = 1; i < 11; i++) {
        document.write(i + " x " + x + " = " + x*i + "<br />");
    }
}

// TableMultiplication(x);

// ===================================================

// ===>  Compter le nombre de lettres / voyelles

function Compter(lettre,phrase) {
    var nb = 0;
    for (let i = 0; i < phrase.length; i++) { // on crée une boucle qui part de 0 au nombre de caractères de la phrase
        if (phrase[i] == lettre) { // finalement on compare chaques lettres de la boucle à la lettre choisie
            nb++;
        }
    }
    return nb;
}

function CompterVoyelles(phrase) {
    var nb = 0;
    var voyelles = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];

    for (let i = 0; i < phrase.length; i++) { // on crée une première boucle qui part de 0 au nombre de caractères de la phrase
        for (let j = 0; j < voyelles.length; j++) { // puis on crée une seconde boucle qui part de 0 au nombre de voyelles
            if (phrase[i] == voyelles [j]) { // finalement on compare chaques lettres de la première boucle aux différentes voyelles de la seconde boucle
                nb++;
            }
        }
    }
    return nb;
}

// alert(Compter("o","Bonjour, ceci est une phrase"));

// ===================================================

// ===>  Menu

// var choix = null;
// document.write("1. Produit<br />2. Table de multiplication<br />3. Compter nb lettres<br />4. Compter nb voyelles<br />");

// do {
//     choix = prompt("Que voulez-vous faire ? ");
// } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// console.log("Vous avez fait le choix :" + choix);

// switch (choix) {
//     case "1" :
//         var x = prompt("X : ");
//         var y = prompt("Y : ");
//         Produit(x,y);
//         break;

//     case "2" :
//         var x = prompt("Table de multiplication de  : ");
//         TableMultiplication(x);
//         break;

//     case "3" :
//         var phrase = prompt("Écrivez une phrase : ");
//         var lettre = prompt("Choisissez une lettre contenue dans la phrase : ");
//         nb = Compter(lettre, phrase);
//         document.write("Il y a <strong>" + nb + "</strong> fois la lettre <strong>" + lettre + "</strong> dans : <br>" + phrase);
//         break;

//     case "4" :
//         var phrase = prompt("Écrivez une phrase : ");
//         nb = CompterVoyelles(phrase);
//         document.write("Il y a <strong>" + nb + "</strong> voyelles dans : <br>" + phrase);
//         break;
// }

// ===================================================

// ===>  strtok

function strtok (str1, str2, n) {
    var tab = str1.split(str2);
    return (tab[n-1]);
}

var str = "robert;dupont;amiens;8000";
document.write(strtok(str,";",3));