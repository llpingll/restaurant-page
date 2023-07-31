import './style.css';
import {createTemplate} from "./template.js"
import addHomeContent from './home';
import {addMenuContent} from './menu';
import {addContactContent} from './contact';

// Load page template + Homepage content
createTemplate();
addHomeContent();

// Cache
const tab = document.querySelector(".tab");
const buttons = document.querySelectorAll("button");
let activePage = "Home";

// Add event listener to buttons
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        if (activePage !== e.target.innerHTML) {
            tab.classList.remove(activePage);
            activePage = e.target.innerHTML;
            pageSelector(e.target.innerHTML);
        }
    });
});

function pageSelector(button) {
    if (button === "Home") {
        addHomeContent();
    }
    else if (button === "Menu") {
        addMenuContent();
    }
    else {
        addContactContent();
    }
}