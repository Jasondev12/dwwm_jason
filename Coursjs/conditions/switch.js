let consommable = "chocolat";

switch (consommable){
    case 'carotte':
    case 'courgette':
        alert("Ceci est un légume");
        break;
    case 'banane':
    case 'cerise':
        alert("Ceci est un fruit");
        break;
    default:
        alert("Ceci n'est ni un fruit ni un légume");
}