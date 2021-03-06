// 229a7f1ca981d5bf71a3e305c2af64ea clé api météo

let villeChoisie = "bergues";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
    villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
    recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=229a7f1ca981d5bf71a3e305c2af64ea&units=metric";

    let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    requete.open("GET", url); // Nous récupérons juste des données
    requete.responseType = "json"; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                console.log(reponse);
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                let icon = reponse.weather[0].icon; // nous avons le code de l'icone ex: 02D
                let iconurl = "http://openweathermap.org/img/w/" + icon + ".png"; // ce code au dessus est mis dans le lien
                let vitesseVent = reponse.wind.speed;
                //console.log(temperature);
                //console.log(ville);
                //console.log(icon);
                //console.log(iconurl);

                console.log(vitesseVent);
                document.querySelector("#temperature_label").textContent = Math.round(
                    temperature
                );
                document.querySelector("#ville").textContent = ville;
                document.querySelector("#iconurl").innerHTML =
                    '<img src="' + iconurl + '" />';
                document.querySelector("#vitesseVent").innerHTML =
                    "<div class=vitesseVent>Vitesse du vent : " +
                    vitesseVent +
                    " Km/h</div>";
            } else {
                alert("Un problème est intervenu, merci de revenir plus tard.");
            }
        }
    };
}

function heure() {
    var ladate = new Date();
    var n = ladate.toLocaleTimeString();
    console.log(n);
    document.querySelector("#heure").innerHTML = n;
}
setInterval("heure()", 1000);
