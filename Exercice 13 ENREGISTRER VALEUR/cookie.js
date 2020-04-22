// INITIALISATION
var ReinitCookies = document.getElementById("reinitialiser").addEventListener("click", function(){
    eraseCookie("nom", "prenom");
    location.reload();
});

document.getElementById("validate").addEventListener("click", function() {
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    location.reload();
    createCookie("nom",nom);
    createCookie("prenom",prenom);
});

// VERIFICATION COOKIES

if (readCookie("nom") != null && readCookie("prenom") != null) {
    document.getElementById("container").innerHTML = '<p class="ligne">Bonjour ' + readCookie("nom") + ' ' + readCookie("prenom") + '</p>'
}

// GESTION COOKIES

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }

    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function readCookie(name) {
    var listeCookies = document.cookie.split('; ');

    for (let i = 0; i < listeCookies.length; i++) {
        var unCookie = listeCookies[i].split("=");
        if (unCookie[0] == name) return unCookie[1];
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}