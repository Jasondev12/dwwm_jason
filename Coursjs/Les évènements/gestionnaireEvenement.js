let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', () => {
    if(confirm('Etes vous sur?')){
        location.href = "http://google.fr";
    }
});

button.addEventListener('mouseover', () => {
    document.body.style.backgroundColor='orange';
});

function backgroundWhite() {
    document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.removeEventListener('mouseout', backgroundWhite);

button.addEventListener('mouseout', () => {
    document.body.style.fontFamily = 'arial';
});

