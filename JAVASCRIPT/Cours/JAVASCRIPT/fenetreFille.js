var parent = window.opener;


document.getElementById("fermerFenetre").addEventListener("click", function(){
    window.close();
});

document.getElementById("fermerParent").addEventListener("click", function(){
    parent.close();
});
