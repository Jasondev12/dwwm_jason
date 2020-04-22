// =====> Variables
var fille;
var parent = window.opener;

// =====> Fenêtre parent

document.getElementById("ouvrirFenetre").addEventListener("click", function() {
    fille = window.open("fille.html", "", "width=200,height=200");
});

document.getElementById("fermerFenetre").addEventListener("click", function() {
    fille.close();
});

document.getElementById("deplacerFenetre").addEventListener("click", function() {
    fille.moveTo(1000, 250);
    fille.focus();
});

document.getElementById("reduireFenetre").addEventListener("click", function() {
    fille.resizeTo(1000, 200);        
    fille.focus();
});

// ====> Fenêtre fille

var fermerParent = document.getElementById("fermerParent").addEventListener("click", function () {
    parent.close();
});
var fermerFille = document.getElementById("fermerFille").addEventListener("click", function () {
    window.close();
});