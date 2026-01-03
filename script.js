/* -------------------- About Tabs Logic -------------------- */
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove active classes from all links and content
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* -------------------- Mobile Navigation Menu -------------------- */

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"; // Slides menu in
}

function closemenu() {
    sidemenu.style.right = "-200px"; // Slides menu out
}

/* --- Navigation Underline Logic --- */
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from everyone
        navLinks.forEach(l => l.classList.remove('active'));
        // Add 'active' class only to the one clicked
        this.classList.add('active');
        
        if (window.innerWidth <= 900) {
            closemenu();
        }
    });
});

/* --- Mobile Menu --- */
var sidemenu = document.getElementById("sidemenu");
function openmenu() { sidemenu.style.right = "0"; }
function closemenu() { sidemenu.style.right = "-200px"; }

/* --- About Section Tabs --- */
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (let tablink of tablinks) tablink.classList.remove("active-link");
    for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/* -------------------- Certification Toggle Logic -------------------- */
function toggleDescription(button) {
    // Finds the .layer div that comes immediately after the button
    const description = button.nextElementSibling;

    // Check current state and toggle
    if (description.style.display === "block") {
        description.style.display = "none";
        button.textContent = "View";
        button.style.background = "#ff004f"; // Reset to pink
    } else {
        description.style.display = "block";
        button.textContent = "Hide";
        button.style.background = "#333"; // Darker color when open
    }
}

/* -------------------- Active Link on Scroll -------------------- */
// This adds a professional touch: the nav link highlights as you scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section, #header');
    const navLi = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

