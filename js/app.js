//Loading the page Animation
window.onbeforeunload = function() {loadingAnime()};

function loadingAnime() {
  document.getElementById("mySpinner").style.display = "block";
  document.getElementById("blur").style.display = "block";
}
//Loading the page Animation End

// Side NavBar 
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
// Side NavBar END

// Typing Effect
window.onload = function() {typeWriter()};

var i = 0;
var txt = 'Welcome'; 
var speed = 150; 

document.getElementById("blur2").style.display = "block";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ty-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout (function flash() {
  document.getElementById("ty-effect").classList.add("double-flash");
}, 1000);

setTimeout (function() {
  document.getElementById("blur2").style.display = "none";
}, 2500);
// Typing Effect END

