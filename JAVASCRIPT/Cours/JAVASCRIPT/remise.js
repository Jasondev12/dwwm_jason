function Remise() {
    var port = 6;
    var pu = prompt("Donne moi le prix du produit");
    var qtecom = prompt("Donne moi la quantite");
    var total = pu * qtecom;
    var rem5 = total * (5 / 100);
    var rem10 = total * (10 / 100);
    var result;

    if (total >= 500) {
        result = total - rem10;
    }
    else if (total >= 100 || total <= 200) {
        result = total - rem5 + port;
    }
    else if (total > 200) {
        result = total - rem10 + port;
    }
    else {
        result = (total * 0.2) + port;
    }
    alert("Le prix total est de "+result);
}
Remise();