function verif(event) {
    // permet de controller les réponses
    // Récupération des inputs pour vérification
    var monInput = event.target;
    // Récupération des éléments correspondant à l'input
    var message = (monInput.parentNode.parentNode).getElementsByClassName('message')[0];

    if(monInput.value == ''){
        //si le champ est vide nous affichons
        message.innerHTML = "<span style='color:orange'>Champ manquant</span>";
        tabErreur[monInput.id] = 0;
    } else if (!monInput.checkValidity()){
        // force le test du pattern sur l'input
        message.innerHTML = "Format incorrect";
        tabErreur[monInput.id] = 0;
    } else {
        message.innerHTML = "<span style='color:green'>Bonne réponse</span>";
        tabErreur[monInput.id] = 1;
    }
    verifForm();
}

function verifForm(){
    //  Vérification de la validité de tout le questionnaire
    for (var key in tabErreur){
        if (tabErreur[key] == 0)
        return false;
    }
    verification();
    document.getElementById("soumettre").disabled=false;
    return true;
}

function verification(){
    inputrep1=inputrep1.value;
    inputrep2=inputrep2.value;;
    inputrep3=inputrep3.value;;
    inputrep4=inputrep4.value;
    inputrep5=inputrep5.value;;
    inputrep6=inputrep6.value;;
}

function reset(){
    // remise à vide des inputs
    for(i = 0; i < lesInputs.length; i++){
        lesInputs[i].value="";
    }
}

// Affectation des inputs
var lesInputs = document.getElementsByTagName("input");
for (i=0; i < lesInputs.length; i++) {
    lesInputs[i].addEventListener("change", verif);
}

// Affectation du bouton efface les réponses
document.getElementById("reset").addEventListener("click", reset);

inputrep1 = document.getElementById("1r");
inputrep2 = document.getElementById("2r");
inputrep3 = document.getElementById("3r");
inputrep4 = document.getElementById("4r");
inputrep5 = document.getElementById("5r");
inputrep6 = document.getElementById("6r");

var tabErreur = {
    "1r": 0,
    "2r": 0,
    "3r": 0,
    "4r": 0,
    "5r": 0,
    "6r": 0
};

//Contient les solutions aux questions
var lesSolutions={
    "1r": "Panoramix",
    "2r": "Lucky Luke",
    "3r": "Tom",
    "4r": "Kev Adams",
    "5r": "Luffy",
    "6r": "un otaku"
};