/* =========================
   TYPING ANIMATION
========================= */

const roles = [

"Data Analyst",
"Power BI Developer",
"SQL Developer",
"Python Developer",
"ML Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

const element = document.getElementById("typing");

if(!element) return;

const currentRole = roles[roleIndex];

if(isDeleting){

element.textContent = currentRole.substring(0, charIndex--);

}else{

element.textContent = currentRole.substring(0, charIndex++);

}

let speed = isDeleting ? 50 : 100;

if(!isDeleting && charIndex === currentRole.length){

speed = 1500;
isDeleting = true;

}

else if(isDeleting && charIndex === 0){

isDeleting = false;
roleIndex = (roleIndex + 1) % roles.length;
speed = 300;

}

setTimeout(typeEffect, speed);

}


/* =========================
   PARTICLES BACKGROUND
========================= */

function loadParticles(){

particlesJS("particles-js", {

particles: {

number: {
value: 80,
density: {
enable: true,
value_area: 800
}
},

color: {
value: "#38bdf8"
},

shape: {
type: "circle"
},

opacity: {
value: 0.5,
random: false
},

size: {
value: 3,
random: true
},

move: {
enable: true,
speed: 2,
direction: "none",
out_mode: "out"
}

},

interactivity: {

events: {

onhover: {
enable: true,
mode: "repulse"
},

onclick: {
enable: true,
mode: "push"
}

},

modes: {

repulse: {
distance: 120
},

push: {
particles_nb: 4
}

}

},

retina_detect: true

});

}


/* =========================
   LOAD EVERYTHING
========================= */

document.addEventListener("DOMContentLoaded", function(){

typeEffect();

loadParticles();

});
