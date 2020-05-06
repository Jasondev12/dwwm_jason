function verif(event) {
    // permet de controller la validité d'un champ du formulaire
    // on recupere l'input sur lequel faire la verification
    var monInput = event.target;
    //on recupere les elements correspondant à l'input
    var message = (monInput.parentNode.parentNode).getElementsByClassName('message')[0];

    if (monInput.value == '') {
        // si le champ est vide, on affiche rien
        message.innerHTML = "Champ manquant";
        message.style.color="orange";
        tabErreur[monInput.id] = 0;
    } else if (!monInput.checkValidity()) {
        // force le test du pattern sur l'input
        message.innerHTML = "Format incorrect";
        message.style.color="red";
        tabErreur[monInput.id] = 0;
    } else //if (monInput.checkValidity())
    {
        message.innerHTML = "";
        tabErreur[monInput.id] = 1;
    }
    verifForm();
}

function verifForm() {
    // vérifie que le formulaire est complètement remplis pour activer le bouton soumettre
    document.getElementById("soumettre").disabled=true
    // verifie la validité de tout le formulaire
    for (var key in tabErreur) {
        if (tabErreur[key] == 0)
            return false;
    }
    //lance le calcul
    document.getElementById("soumettre").disabled=false;
    return true;
}

function reset(){
    //remise à 0 des inputs et des messages
    for (i = 0; i < lesInputs.length; i++) {
        lesInputs[i].value="";
        lesMessages[i+1].textContent=""
    }
    document.getElementById("soumettre").disabled=true;
}

function verifReponses(){
    // compare les réponses données et les solutions stockées et affiche le message correspondant.

    //on recupere les reponses données
    lesReponses = document.getElementsByTagName("input");
    //pour chaque question
    for (i=0;i<lesReponses.length;i++)
    {
        //on compare la réponse à la solution
        if ((lesSolutions[lesReponses[i].id]).toUpperCase()==(lesReponses[i].value).toUpperCase())
        {
            lesMessages[i+1].innerHTML = "Bonne réponse";
            lesMessages[i+1].style.color="green";
        }
        else{
            lesMessages[i+1].innerHTML = "Réponse incorrecte";
            lesMessages[i+1].style.color="red";
        }
    }
}

//on affecte le controle sur les inputs
var lesInputs = document.getElementsByTagName("input");
for (i = 0; i < lesInputs.length; i++) {
    lesInputs[i].addEventListener("input", verif);
}
//on recupere les messages
lesMessages = document.getElementsByClassName("message");
//on affecte le bouton effacer les reponses
document.getElementById("reset").addEventListener("click",reset);
//on affecte le bouton Soumettre
document.getElementById("soumettre").addEventListener("click",verifReponses);

var tabErreur = { // contient 0 si le champ est en erreur; 1 sinon
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
}