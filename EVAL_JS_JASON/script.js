function verif(event) {
    // permet de controller la validité d'un champ du formulaire
    // on recupere l'input sur lequel faire la verification
    var monInput = event.target;
    //on recupere les elements correspondant à l'input
    var message = (monInput.parentNode).getElementsByClassName('erreur')[0];

    if (monInput.value == '') {
        // si le champ est vide, on affiche rien
        message.innerHTML = "Champ manquant";
        tabErreur[monInput.id] = 0;
        inputMens.value="";
        inputCout.value="";
    } else if (!monInput.checkValidity()) {
        // force le test du pattern sur l'input
        message.innerHTML = "Format incorrect";
        tabErreur[monInput.id] = 0;
        inputMens.value="";
        inputCout.value="";
    } else //if (monInput.checkValidity())
    {
        message.innerHTML = "";
        tabErreur[monInput.id] = 1;
    }
    verifForm();
}

function verifForm() {
    // verifie la validité de tout le formulaire
    for (var key in tabErreur) {
        if (tabErreur[key] == 0)
            return false;
    }
    //lance le calcul
    calcul();
    document.getElementById("calcul").disabled=false;
    return true;
};

function calcul() {
    //calcul des mensualité et du cout total
    var cap = document.getElementById("capitalEmprunte").value;
    var taux = parseFloat( document.getElementById("tauxNominal").value)/100;
    var nbMois = document.getElementById("dureeEmprunt").value*12;
    var mens = parseFloat((cap * taux/12)/(1 - Math.pow(1 + taux/12, -nbMois))).toFixed(2);
    var cout =parseFloat(mens *nbMois).toFixed(2) ;
    inputMens.value=mens;
    inputCout.value=cout;
    document.getElementById("calcul").addEventListener("click", event =>{
        alert('Après validation, vos mensualités seront de '+mens+ '€ et le coût total sera de : '+cout+'€');
    })
};

function reset(){
    //remise à 0 des inputs
    for (i = 0; i < lesInputs.length; i++) {
        lesInputs[i].value="";
    }
};

//on affecte les inputs
var lesInputs = document.getElementsByTagName("input");
for (i = 0; i < lesInputs.length; i++) {
    lesInputs[i].addEventListener("change", verif);
}
//on affecte le bouton nouveau calcul
document.getElementById("reset").addEventListener("click",reset);


inputMens = document.getElementById("mensualite");
inputCout = document.getElementById("coutTotal");
var tabErreur = { // contient 0 si le champ est en erreur; 1 sinon
    "capitalEmprunte": 0,
    "tauxNominal": 0,
    "dureeEmprunt": 0
};