export function initializeContactPage() {

  const content = document.querySelector('#content');

  const container = document.createElement('div');

  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Contact Us';


  const firstPersonCard = document.createElement('div');
  const firstContactTitle = document.createElement('h2');
  const firstContactDesc = document.createElement('p');
  firstContactTitle.textContent = 'Important Person One';
  firstContactDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";
  firstPersonCard.setAttribute('id', 'first-person-card');

  const secondPersonCard = document.createElement('div');
  const secondContactTitle = document.createElement('h2');
  const secondContactDesc = document.createElement('p');
  secondContactTitle.textContent = 'Important Person Two';
  secondContactDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";
  secondPersonCard.setAttribute('id', 'second-person-card');

  const thirdPersonCard = document.createElement('div');
  const thirdContactTitle = document.createElement('h2');
  const thirdContactDesc = document.createElement('p');
  thirdContactTitle.textContent = 'Important Person Three';
  thirdContactDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";
  thirdPersonCard.setAttribute('id', 'third-person-card');

  firstPersonCard.appendChild(firstContactTitle);
  firstPersonCard.appendChild(firstContactDesc);

  secondPersonCard.appendChild(secondContactTitle);
  secondPersonCard.appendChild(secondContactDesc);

  thirdPersonCard.appendChild(thirdContactTitle);
  thirdPersonCard.appendChild(thirdContactDesc);

  container.appendChild(pageTitle);
  container.appendChild(firstPersonCard);
  container.appendChild(secondPersonCard);
  container.appendChild(thirdPersonCard);

  content.appendChild(container);

}
