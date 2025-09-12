
export function initializePage() {

  const content = document.querySelector('#content');
  const titleContainer = document.createElement('div');
  const title = document.createElement('h1');
  const placeholderImage1 = document.createElement('div');
  placeholderImage1.classList.add('placeholderImage');

  const placeholderImage2 = document.createElement('div');
  placeholderImage2.classList.add('placeholderImage');

  const menuCard1 = document.createElement('div');
  menuCard1.classList.add('menuCard');

  const menuItem1Desc = document.createElement('p');
  const menuItem1Title = document.createElement('h2');
  menuItem1Title.textContent = "Spinach and Artichoke Dip";
  menuItem1Desc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";

  const menuCard2 = document.createElement('div');
  menuCard2.classList.add('menuCard');
  const menuItem2Desc = document.createElement('p');
  const menuItem2Title = document.createElement('h2');
  menuItem2Desc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.";
  menuItem2Title.textContent = "Pickle Pizza";

  menuCard1.appendChild(menuItem1Title);
  menuCard1.appendChild(menuItem1Desc);
  menuCard1.appendChild(placeholderImage1);

  menuCard2.appendChild(menuItem2Title);
  menuCard2.appendChild(menuItem2Desc);
  menuCard2.appendChild(placeholderImage2);

  title.textContent = "John Doe's Coffee House";
  titleContainer.appendChild(title);

  content.appendChild(titleContainer);
  content.appendChild(menuCard1);
  content.appendChild(menuCard2);
}

