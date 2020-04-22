let a = document.querySelector('a');
let button = document.querySelector('button');

//a.onclick = function () {
//    if(confirm('Etes-vous sur ?')){
//        location.href="http://google.fr"
//    }
//}

a.onclick = () => {
    if(confirm('Etes-vous sur ?')){
           location.href="http://google.fr"
      }
}

button.onmouseover = () => {
   document.body.style.backgroundColor='orange';
}

button.onmouseout= () => {
    document.body.style.backgroundColor='white';
 }
 
 
