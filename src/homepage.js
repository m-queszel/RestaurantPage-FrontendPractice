export function initializeHomepage() {

  const page = document.querySelector('#content');

  const title = document.createElement("h1");
  title.textContent = "John Doe's Coffee Bar";

  const pageContainer = document.createElement('div');
  pageContainer.classList.add('container');

  const introduction = document.createElement('p');
  const signature = document.createElement('h3');
  signature.textContent = 'Barylocks';

  introduction.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";

  pageContainer.appendChild(introduction);
  pageContainer.appendChild(signature);

  page.appendChild(title);
  page.appendChild(pageContainer);




}
