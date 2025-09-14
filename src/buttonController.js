import { initializeHomepage } from "./homepage";
import { initializeMenuPage } from "./menupage";
import { initializeContactPage } from "./contactpage";
const homebtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const page = document.querySelector('#content');

export function buttonController() {

  homebtn.addEventListener('click', () => {
    page.innerHTML = '';
    initializeHomepage();
  })

  menuBtn.addEventListener('click', () => {
    page.innerHTML = '';
    initializeMenuPage();
  })

  contactBtn.addEventListener('click', () => {
    page.innerHTML = '';
    initializeContactPage();
  })
}

