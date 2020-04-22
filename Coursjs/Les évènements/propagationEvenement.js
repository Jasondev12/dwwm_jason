let article = document.querySelector('article');
let h1 = document.querySelector('h1');

article.addEventListener('click', ()=> {
    alert('article cliqué');
});

h1.addEventListener('click', (e)=> {
    alert('titre cliqué2');
    e.stopPropagation();
});




