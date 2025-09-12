
export function initializePage() {
  const content = document.querySelector('#content');
  const titleContainer = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = "John Doe's Coffee House";
  titleContainer.appendChild(title);
  content.appendChild(titleContainer);
}

