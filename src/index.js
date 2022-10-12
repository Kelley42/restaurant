import { nav } from './initial-page'; 
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

nav();
home();
const menuTab = document.querySelector(".menu-tab");
menuTab.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
});
const homeTab = document.querySelector(".home-tab");
homeTab.addEventListener("click", () => {
    content.innerHTML = "";
    home();
});
const contactTab = document.querySelector(".contact-tab");
contactTab.addEventListener("click", () => {
    content.innerHTML = "";
    contact();
});



