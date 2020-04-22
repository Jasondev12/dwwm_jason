let crie = "Toujours plus bas"; // globale

function crieDeGuerre() {
    let crie = "Toujours plus fort !" // locale
    console.log(crie);
}

crieDeGuerre();
console.log(crie);

let nombreUn = 7;
let nombreDeux = 4;

function addition(nombreUn,nombreDeux = 10) {
    let result = nombreUn + nombreDeux;
   // console.log(result); // affiche
    return result; // 11
}

console.log(addition(nombreUn,nombreDeux));



function cuisiner(nombreDeGateaux,minutesDePreparation = 10, minutesDeCuisson = 15) {
    let result = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
    return result; 
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);
console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);

function demanderAge() {
    let age = prompt("Quel est votre age ?");
    alert("Vous avez " + age + " ans.") 
}
demanderAge();

function prevoirAge() {
    let age = prompt("Quel est votre age ?");
    //age = parseInt(age);
    //age = parseFloat(age);

    // nombre = 45;
    // nombreEnString = nombre + "";
    // nombreEnString = nombre.tostring();

    age = Number(age);
    alert("Vous avez " + (age+1) + " ans.") 
}
prevoirAge();