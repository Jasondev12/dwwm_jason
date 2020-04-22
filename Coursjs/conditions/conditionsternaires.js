let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";
let chauffeur    = "Louis-Nicolas";

if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
    alert('Le train va démarrer à destination de ' + gareDArrivee + '.');
}
else {
    alert('Le train ne peut pas démarrer.');
}

// let x = 1;

// CONDITION TERNAIRE
// x > 3 ? console.log('X est supérieur à trois') : console.log('X est inférieur à trois');

// if(x > 3) {
//     console.log('X est supérieur à trois');
// }
// else {
//     console.log('X est inférieur à trois');
// }