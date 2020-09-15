// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
// votre code
document.getElementsByTagName('body')[0].style.background = '#992323';
// Changez la couleur du texte du body en #fff
// votre code
document.body.style.color = '#fff';
// Supprimez la ligne suivante
// var workspace = null;
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
// votre code
var workspace = document.getElementById('workspace');


// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
// votre code
console.log('nbr d\'elements enfants : ' + workspace.childElementCount)

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
// var p = null;
// console.log(workspace.firstElementChild)
// Affectez le résultat à la variable p
// votre code
var p = workspace.firstElementChild;
//ou utilisé childNodes[0] ou children;
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
// votre code
var h3 = document.createElement('H3')
workspace.insertBefore(h3, p);
h3.innerHTML = "Hello JS world";

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
const div = document.createElement('div')


let obj = {

};


function runChrono(n, obj) {
  // votre code
  let counter = n;

  workspace.insertBefore(div, p);
  div.setAttribute('id', 'counter');

  obj.interval = setInterval(function () {
    if (counter < 0) {
      return
    }
    //affiche counter dans div
    div.innerHTML = counter;

    counter--
  }, 1000);

}

// console.log(runChrono(10));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
// votre code
var button = document.createElement('button');
workspace.insertBefore(button, h3.nextSibling);
button.innerHTML = "start countdown";
button.addEventListener('click', function () {
	clearInterval(obj.interval);
  runChrono(10, obj);

});