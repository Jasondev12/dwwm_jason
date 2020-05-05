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
        input1r.value="";
        input2r.value="";
        input3r.value="";
        input4r.value="";
        input5r.value="";
        input6r.value="";
    } else if (!monInput.checkValidity()){
        // force le test du pattern sur l'input
        message.innerHTML = "Format incorrect";
        tabErreur[monInput.id] = 0;
      
    } else {
        message.innerHTML = "<span style='color:green'>Bonne réponse</span>";
        lesSolutions[monInput.id] = 1;
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
    inputrep1.value=input1r;
    inputrep2value=input2r;
    inputrep3.value=input3r;
    inputrep4.value=input4;
    inputrep5.value=input5r;
    inputrep6.value=input6r;
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

input1r = document.getElementById("1r");
input2r = document.getElementById("2r");
input3r = document.getElementById("3r");
input4r = document.getElementById("4r");
input5r = document.getElementById("5r");
input6r = document.getElementById("6r");

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