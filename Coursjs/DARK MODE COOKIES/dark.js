let button = document.querySelector('#mode');
let span = document.querySelector('span');

// gestion du localStorage pour garder le mode sombre ou clair
if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}

// Détection du click sur le boutton via une fonction anonyme
button.addEventListener('click', () => {
    // nous stockons dans un tableau dark avec true et false si pas dark
    if (document.body.classList.contains('dark')) {
        // mode clair
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'clair');
    } else {
        modeSombre();
        createCookie("toto", monRange.value, 5);
    }
});

function modeSombre() {
    // mode sombre
    // parametrage de la classe dark
    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'sombre');
localgglffpgbhjb
}
ggggggggggggggggggggggghgbhgjgbj