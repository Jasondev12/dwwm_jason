// Une fonction anonyme est une fonction qui ne va pas posséder de nom.
// On utilise généralement ces fonctions lorsque nous n'avons pas besoin de les appeler par leur nom.
// C'est-à-dire, lorsque nous utilisons notre fonction immédiatement, sans la réutiliser plus tard.

function(){
    console.log('Je suis une fonction anonyme');
  }
  
  // Comment executer cette fonction ?
  // - en l'utilisant dans une variable (souvent dans un objet)
  // - en l'auto-invoquant
  // - en utilisant un évènement (que nous verrons plus tard)
  
  let fonctionAnonyme = function(){
    console.log('Je suis une fonction anonyme');
  }
  
  (function(){console.log('Je suis une fonction anonyme')})(); 
// ici nous avons juste englobé notre fonction dans des paranthèses,
// et ajouté "()" à la fin
  
  