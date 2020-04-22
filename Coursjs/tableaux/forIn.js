let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
   panier[fruit]='pomme';
}

console.log(panier);