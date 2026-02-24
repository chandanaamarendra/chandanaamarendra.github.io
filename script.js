/* TYPING */

const roles=["Data Analyst","Power BI Developer","SQL Developer","Python Developer","ML Enthusiast"];

let i=0,j=0,current="",deleting=false;

function type(){

current=roles[i];

document.getElementById("typing").textContent=current.substring(0,j);

if(!deleting && j<current.length){

j++;

setTimeout(type,100);

}

else if(deleting && j>0){

j--;

setTimeout(type,50);

}

else{

deleting=!deleting;

if(!deleting)i=(i+1)%roles.length;

setTimeout(type,800);

}

}

type();


/* PARTICLES */

particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#ff0000"},

size:{value:3},

move:{speed:2}

}

});
