function produit(x,y)
{
    return x * y
}
var x = prompt("entrer un nombre");
x=parseInt(x);
var y = prompt("entrer un autre nombre");
y = parseInt(y);
document.write("Le produit de "+x+" * "+y+" est égal " +produit(x,y));
function afficheImg(image){
    document.write("<img src="+image+" alt=\"\"  />")
}
afficheImg("admin.png");
