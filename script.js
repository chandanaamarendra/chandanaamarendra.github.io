// ROLES LIST
const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Developer",
    "Python Developer",
    "ML Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    // Safety check (prevents errors if element not loaded)
    if (!typingElement) return;

    currentRole = roles[roleIndex];

    // Typing or deleting text
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    // When finished typing
    if (!isDeleting && charIndex === currentRole.length + 1) {
        speed = 1200; // pause before deleting
        isDeleting = true;
    }

    // When finished deleting
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}


// Start typing after page loads
document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});


// PARTICLES BACKGROUND
particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
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
            value: 0.5
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});
