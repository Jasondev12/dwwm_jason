// ===> Exo 1

// var val = null;
// var tab = [];

// var taille = prompt("Taille du tableau : ");
// console.log("Taille : " + taille);

// for (let i = 0; i < taille; i++) {
//     tab[i] = prompt("Valeur " + parseInt(i+1) + " : ");
// }

// tab.forEach(element => { document.write(element + "<br />") });

// ===================================================

// ===> Exo 2

function GetInteger() {
    do {
        var nb = prompt("Entrez un nombre : ");
    } while (!(Number.isInteger(nb)))
}

function InitTab() {
    var nb = GetInteger();
    return tab = new Array(nb);
}

function SaisieTab(tableau) {
    for (let i = 0; i < tableau.lenght; i++) {
        var contenuTab = GetInteger();
        tableau[i] = contenuTab;
    }

    return tab;
}

function AfficheTab(tableau) {
    tableau.forEach(element => { document.write(element + "<br />") });
}

function RechercheTab(tableau) {
    var rang = prompt("Rang : ");
    return document.write("La valeur "+rang+" est " +tableau[rang-1]);
}

function InfoTab(tableau) {
    var somme = 0;
    var taille = parseInt(tableau.length);
    var moyenne = 0;
    var maximum = 0;
      
        for(let i = 0; i < parseInt(taille); i++) {
            console.log(tableau[i]);
            somme = parseInt(somme) + parseInt(tableau[i]);
        }

    moyenne = somme / taille;
    maximum = Math.max(...tableau);
    console.log(tableau);
    return [somme, taille, parseInt(moyenne), maximum];
}
    
// tableau = InitTab();
// tableau = SaisieTab(tableau);

// AfficheTab(tableau);
// RechercheTab(tableau);

// data = InfoTab(tableau);
// console.log("Somme : " + data[0]);
// console.log("Taille : " + data[1]);
// console.log("Moyenne : " + data[2]);
// console.log("Maximum : " + data[3]);

// ===================================================

// ===> Exo 3

// var listePrenom = []
// for (let i = 0; i < 20; i++) {
//     listePrenom[i] = "Nom_"+parseInt(i+1);
// }
// console.log("Liste crée");

// AfficheTab(listePrenom);
// console.log("Tableau affiché");

// do {
//     var saisie = prompt("Saisir un prénom à chercher dans la liste: ");
//     var position = listePrenom.indexOf(saisie); 
// } while (position == -1); // renvoie -1 si non trouvé
// console.log("Saisie effectué");

// // on compte la liste en deux parties
// listePart1 = listePrenom.slice(0,position);
// listePart2 = listePrenom.slice(parseInt(position+1),listePrenom.lenght);

// // puis on les réassemble
// nouvelleListe = listePart1.concat(listePart2);
// nouvelleListe.push("");
// AfficheTab(nouvelleListe);

// ===================================================

// ===> Exo 4

function triBulles(tab)
{
    do {
        var flag = false;
        for (var i = 0; i < tab.length-1; i++)
        {
            if (tab[i] > tab[i+1])
            {
                temp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = temp;
                flag = true;
            }
        }
    } while(flag);
}

// var tab = [12,14,6,7,25,1];
// console.log("Tableau non rangé : " + tab);
// triBulles(tab);
// console.log("Tableau trié dans l'ordre croissant : " + tab);

// ===================================================

// ===> Exo 5

function triInsertion(tab) {
    for (let i = 0; i < tab.length-1; i++) {
        valDepart = i;

        for (let j = parseInt(i+1); j < tab.length; j++) {
            if (tab[j] > tab[valDepart]) {
                valDepart = j;
            }
        }
    
        temp = tab[valDepart];
        tab[valDepart] = tab[i];
        tab[i] = temp;
    } 
}

// var tab = [12,14,6,7,25,1];
// console.log("Tableau non rangé : " + tab);
// triInsertion(tab);
// console.log("Tableau dans l'ordre décroissant : " + tab);

// ===================================================

// ===> Exo 6

// on crée deux dates
var date1 = new Date("2020 March 19 21:40:30");
var date2 = new Date("2020 March 19 01:01:01");
console.log("Date 1 => " + date1);
console.log("Date 2 => " + date2);

// on crée trois variables et on additionne les deux valeurs
var heure = date1.getHours() + date2.getHours();
var minute = date1.getMinutes() + date2.getMinutes();
var seconde = date1.getSeconds() + date2.getSeconds();
console.log("Données combinées :");
console.log("Seconde => " + seconde);
console.log("Minute => " + minute);
console.log("Heure => " + heure);

// cas des secondes
if (seconde > 59) { // si +60sec
    var diffSec = seconde-60; // on cacule la différence
    seconde = parseInt(0+diffSec); // finalement, on définit la nouvelle valeur de seconde : 0 + la différence
    minute++;
}

console.log("\nDonnées modifiées :");
console.log("Seconde => " + seconde);

// cas des minute
if (minute > 59) {
    var diffMin = minute-60;
    minute = parseInt(0+diffMin);
    heure++;
}

console.log("Minute => " + minute);

// cas des heures
if (heure > 23) {
    var diffHeure = heure-24;
    heure = parseInt(0+diffHeure);
}

console.log("Heure => " + heure);
var date3 = new Date ("2020 March 19 "+heure+":"+minute+":"+seconde);
console.log("Date 'combinée' => " + date3);