const rangeInput = document.querySelector('#gridSize');
const size = document.querySelector('#size');
const createBtn = document.querySelector('#create');
const downloadBtn = document.querySelector('#download');
const app = document.querySelector('.app');
const popup = document.querySelector('.popup');

let container;
let canvasapp;

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
    const square = childDiv.cloneNode(true);
    rowDiv.appendChild(square);
  }

  for (let i = 1; i <= size; i++) {
    containerDiv.appendChild(rowDiv.cloneNode(true));
  }

  //setup listners
  //turn squares black on click
  containerDiv.addEventListener('click', (e) => {
    if (!e.target.classList.contains('square')) return;

    e.target.style.backgroundColor = 'black';
  });

  return containerDiv;
};

const setHover = () => {
  const elements = document.querySelectorAll('.square');

  elements.forEach((square) => {
    //highlight squares on mouse hover
    //add eventlistener for highlighting squares on mouse hover
    square.addEventListener('mouseenter', () => {
      square.classList.toggle('mousehover');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.toggle('mousehover');
    });
  });
};

const init = () => {
  size.textContent = `${rangeInput.value} X ${rangeInput.value}`;
  container = createGrid(16);
  document.querySelector('.app').prepend(container);
  setHover();

  //listners
  rangeInput.addEventListener('change', () => {
    size.textContent = `${rangeInput.value} X ${rangeInput.value}`;
  });

  createBtn.addEventListener('click', () => {
    container.remove();
    container = createGrid(Number(rangeInput.value));
    document.querySelector('.app').prepend(container);
    setHover();
  });

  downloadBtn.addEventListener('click', () => {
    html2canvas(container, { width: 860, height: 860 }).then(function (canvas) {
      if (popup.lastElementChild.nodeName === 'CANVAS') {
        popup.lastElementChild.remove();
      }
      popup.appendChild(canvas);
      popup.classList.add('show-popup');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      popup.classList.remove('show-popup');
    }
  });
};

init();
