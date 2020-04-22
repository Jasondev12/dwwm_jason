function nbVoyelles(string)
{
    var nb = 0; // initialisation du compteur
    var tab = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U','y','Y']; // déclaration d'un tableau avec les voyelles
    for(let i = 0; i< string.length; i++){
        for(let j=0; j < 12; j++){
            if(string[i] == tab[j]){
                nb++;
            }
        }
    }
return nb;
}
alert("Le nombre de voyelles est de : "+nbVoyelles("taaaa"));