/*  document.querySelector("button").addEventListener("click", handleClick);

    function handleClick() {
    alert("I got clicked!");
    } 
*/

/* lo mas comun es pasar un Anonymus Function, como segundo parametro
    y no como una funcion creada aparte quedaria algo similar a esto
 
    document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
    } );
 
    basicamente habria que sacarle el nombre a la funcion,
    y esta no se ejecutara al cargar nuestra pagina
*/

// crear una variable para nuestro audio
var audio = new Audio("./sounds/tom-1.mp3");

// creando una variable para saber la cantidad de botones que tendremos
// y usarla en nuestro bucle "for"

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// DETECTING BUTTON PRESS

// creando un loop "for" para aniadir un "addEventListener" a nuestros botones

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

/* 

// crear una variable para nuestro audio
    var audio = new Audio("./sounds/tom-1.mp3");
    // reproduciendo nuestro audio
    audio.play();

*/

// DETECTING KEYBOARD PRESS

// la palabra "event" que es pasada como parametro de la funcion siempre hace referencia al "document.addEventListener"
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

// Functiom to make sound.

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();

      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();

      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  // Seleccionando el boton que queremos darle animacion
  var activeButton = document.querySelector("." + currentKey);

  // agregandole una animacion al boton seleccionado, lo lograremos agregandole una clase de CSS
  activeButton.classList.add("pressed");

  // Eliminando la clase ".pressed" despues de un periodo de tiempo con la f "setTimeout"
  myTimeout = setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
