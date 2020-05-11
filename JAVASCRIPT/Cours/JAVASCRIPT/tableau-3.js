
//Tableau de prenoms
//var tab = ["Audrey", "Aurélien", "Alain", "Jérémy", "Laurent", "Fred", "Amelie", "John", "Samuel", "Stéphane"];

//Prenom à supprimer
//var prenom = prompt("Entrez le prenom à supprimer:");

//Position du prenom dans le tableau
//var pos = tab.indexOf(prenom);

//Si position != -1 (prenom trouvé dans le tableau)
//if (pos != -1) {

    //Retirer le prenom
    //tab.splice(pos, 1,"");
//}
//console.log(tab);


function trouverMot(mot, tab)
{
    for (let i = 0; i<tab.length; i++)
    {
        if (tab[i]==mot)
        {
            var lim = i;
            for (i = lim; i<tab.length; i++)
            {
                tab[i] = "";
                /tab[i+1] = tab[i];/

                if (tab[i]=="")
                {
                    tab[i] = tab[i+1];
                }

                if (tab[i]==undefined)
                {
                    tab[i] = "";
                }
            }

        }
    }
    return tab;
}


var tab = ["baptiste","martine","alison","maxence","nabil","jason","nicolas","yousra","vessilya","mathys","alan","benjamin","loic","nathanael","mederic","ronaldo","leo","neymar","rivaldo","devdude"];
do { 
    var mot = prompt("Entrez un prénom : ");
    tab = trouverMot(mot, tab); 
    /triBulles(tab);/
    afficheTab(tab);
    again = confirm("Voulez-vous continuer ?");
    // afficheTab(tab);
} while(again);
afficheTab(tab);