// 1ère méthode : Ecrit juste un texte
document.write('test');

// 2ème méthode : Ajouter un élément brut
let h1 = document.querySelector('h1');
h1.append('test');

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement('div');

// Le personnaliser
helloWorld.textContent = "Hello World !";

// L'ajouter à notre page
// document.body.append(helloWorld); (après)
// document.body.appendChild(helloWorld); (après)

// document.body.insertBefore(helloWorld, document.querySelector('.container'));

document.querySelector('.container').prepend(helloWorld);