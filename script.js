const roles = [
"Data Analyst",
"Power BI Developer",
"Advanced Excel Specialist",
"SQL Developer",
"Python Beginner",
"ML Enthusiast"
];

let i=0;
let j=0;
let current="";
let deleting=false;

function type(){

current=roles[i];

if(deleting)
document.getElementById("typing").textContent=current.substring(0,j--);

else
document.getElementById("typing").textContent=current.substring(0,j++);

if(!deleting && j==current.length){

deleting=true;

setTimeout(type,1000);

return;

}

if(deleting && j==0){

deleting=false;

i=(i+1)%roles.length;

}

setTimeout(type,deleting?50:100);

}

type();

particlesJS("particles-js", {

particles: {

number: {
value: 100,
density: {
enable: true,
value_area: 800
}
},

color: {
value: "#ff2d55"
},

shape: {
type: "circle"
},

opacity: {
value: 0.7,
random: true
},

size: {
value: 3,
random: true
},

line_linked: {
enable: false
},

move: {
enable: true,
speed: 2,
direction: "none",
random: true,
straight: false,
out_mode: "out"
}

},

interactivity: {

detect_on: "canvas",

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
