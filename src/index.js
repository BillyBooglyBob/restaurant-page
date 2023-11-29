import './index.css';
import homepage from "./homepage.js";
import menu1 from "./menu.js";
import contact1 from "./contact.js";

function removeContent() {
    const content = document.getElementById("content");
    content.innerHTML = '';
}

/*
    initial set up, loading the homepage and addings the buttons
    next, any function that gets run need to run add event listener again

*/

function initialisation() {
    homepage();
}

function changeTab() {  
    // add event listener to the tabs
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    home.addEventListener('click', function() {
        removeContent();
        homepage();
    });

    menu.addEventListener('click', function() {
        removeContent();
        menu1();
    });

    contact.addEventListener('click', function() {
        removeContent();
        contact1();
    });
}

// Add an event listener to run the code when the DOM is fully loaded
document.addEventListener('click', function() {
    // Call the changeTab function to set up event listeners
    changeTab();
});


initialisation();
changeTab();


