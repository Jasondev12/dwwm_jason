// EXERCICE 1

var tailleTableau = parseInt(prompt("Taille du tableau :"));
var monTableau = Array(tailleTableau);

for(let i=0; i<=tailleTableau-1; i++)
{
    monTableau[i]=[prompt("Entrer une valeur dans le tableau : ")];
}
console.log(monTableau);