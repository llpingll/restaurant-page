import './style.css';
import {createTemplate} from "./template.js"
import addHomeContent from './home';

// Load page template + Homepage content
createTemplate();
addHomeContent();

// Active page status = home

// Add event listener to buttons
    // Call Page selector function

// Page selector function
    // If menu selected
        // If active page ! menu
            // Delete active page content and add menu content
            // Active page status = menu

    // If contact selected
        // If active page ! contact
            // Delete active page content and add contact content
            // Active page status = contact

    // If home selected
        // If active page ! home
            // Delete active page content and add contact content
            // Active page status = home