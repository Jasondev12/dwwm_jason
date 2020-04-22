
add("nom");
add("prenom");
add("courriel");
add("telephone");
add("codePostal");
add("motDePasse");
addConfirm("confirmation");

// =================================================== Vérifications

// ===> Vérifie si la saisie est valide par rapport au regex
function check(input, img) {
  if (input.checkValidity())
    img.src = 'ressources/images/ok.png';
  else
    img.src = 'ressources/images/notOk.png';
}

// ===> Vérifie si les deux mots de passes sont identiques
function checkPass(pass, passConfirm, passConfirmImg) {
  if (pass.value == passConfirm.value)
    passConfirmImg.src = 'ressources/images/ok.png';
  else
    passConfirmImg.src = 'ressources/images/notOk.png';
}

// =================================================== Ajout du listener qui appelle la fonction de vérification

// ===> Met une majuscule à la première lettre d'un mot
function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ===> Ajoute un listener à une DIV
function add(name) {
  var input = document.getElementById(name);
  var image = document.getElementById("img" + ucFirst(name))

  input.addEventListener("input", function () {
    check(input, image);
  });
}

function addConfirm(name) {
  var pass = document.getElementById("motDePasse");
  var passConfirm = document.getElementById("confirmation");
  var passConfirmImg = document.getElementById("imgConfirmation")

  passConfirm.addEventListener("input", function () {
    checkPass(pass, passConfirm, passConfirmImg);
  })
}

// =================================================== Montrer ou cacher le mot de passe

// ===> Monter/cacher mot de passe 
document.getElementById("showPass").addEventListener("click", function () {
  show("motDePasse");
});

// ===> Monter/cacher confirmation 
document.getElementById("showConfirm").addEventListener("click", function () {
  show("confirmation");
});

// ===> Changer le type d'un input entre text et password
function show(input) {
  var inputChanging = document.getElementById(input);
  if (inputChanging.type === "password") {
    inputChanging.type = "text";
  } else {
    inputChanging.type = "password";
  }
}