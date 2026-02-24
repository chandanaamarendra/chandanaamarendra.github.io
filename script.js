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

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:false}
}

});
