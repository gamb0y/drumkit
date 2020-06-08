
//Detecting button clicked

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // console.log(this.innerHTML);
    var drumSelected = this.innerHTML;

    makeSound(drumSelected);

    buttonAnimation(drumSelected);

  });
}


//Detecting key pressed

document.addEventListener("keydown", function(e) {

  makeSound(e.key);

  buttonAnimation(e.key);

});


//Play sounds

function makeSound(key) {
  // console.log(e.key);
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key);
      break;

  }
}


//Animate buttons

function buttonAnimation(key) {

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  var interval = setTimeout(setUnpressed, 100);

  function setUnpressed() {
    activeButton.classList.remove("pressed");
    clearTimeout(interval);
  }

}
