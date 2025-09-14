import { initializeHomepage } from "./homepage";
import { initializeMenuPage } from "./menupage";

const homebtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
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

}

