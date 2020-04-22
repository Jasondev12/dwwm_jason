// on définit nos variables
var ampoule = document.getElementById("ampoule");
var light = 0;

// on affiche notre ampoule et on ajoute un évènement 'click'
ampoule.innerHTML="<img src='images/amp_off.png' alt=''>";
ampoule.addEventListener("click", lightOn);

function lightOn() {
    if (light == 0) {
        ampoule.innerHTML="<img src='images/amp_on.png' alt=''>";
        light = 1;
    }
    else {
        ampoule.innerHTML="<img src='images/amp_off.png' alt=''>";
        light = 0;
    }
}