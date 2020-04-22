var N = prompt("Entrez N, le nombre de multiples à calculer: ");
var X = prompt("Entrez X, le nombre entier auquel on va calculer les multiples: ");
for(let i=0; i<N; i++)
{
    document.write((parseInt(i)+1) + " x " + X + " = " + (parseInt(i)+1)*X+"<br>");
}