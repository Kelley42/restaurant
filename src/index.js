import { nav } from './initial-page'; 
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

nav();
home();
const menuTab = document.querySelector(".menu-tab");
menuTab.addEventListener("click", () => {
    reset();
    menu();
});
const homeTab = document.querySelector(".home-tab");
homeTab.addEventListener("click", () => {
    reset();
    home();
});
const contactTab = document.querySelector(".contact-tab");
contactTab.addEventListener("click", () => {
    reset();
    contact();
});

function reset() {
    const currentContent = document.querySelector("#content");
    currentContent.innerHTML = "";
    currentContent.classList = "";
};



