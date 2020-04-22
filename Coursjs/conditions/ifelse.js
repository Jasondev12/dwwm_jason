let heure = 19;

// heure == 11;
// heure != 11;
// heure < 11;
// heure > 11;
// heure <= 11;
// heure >= 11;

if (heure < 12) {
    alert("C'est le matin.");
}
else if (heure < 18){
    alert("C'est l'après-midi");
}
else {
    alert("Cest la soirée");
}

let age = 18;

if(age < 18){
    alert("Vous n'êtes pas majeur !");
}
else if(age < 21){
    alert("Vous êtes majeur en France !");
}
else{
    alert("Vous êtes majeur partout, à vous les casinos !");
}