const createGrid = (size) => {
  const containerDiv = document.createElement('div');
  const rowDiv = document.createElement('div');
  const childDiv = document.createElement('div');

  //add class for styling
  containerDiv.classList.add('grid-container');
  rowDiv.classList.add('row');
  childDiv.classList.add('square');

  //create squares inside rows
  for (let i = 1; i <= size; i++) {
    rowDiv.appendChild(childDiv.cloneNode(true));
  }

  for (let i = 1; i <= size; i++) {
    containerDiv.appendChild(rowDiv.cloneNode(true));
  }
  return containerDiv;
};

const container = createGrid(16);

document.body.prepend(container);

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('square')) return;

  console.log('run');
  e.target.style.backgroundColor = 'black';
});
