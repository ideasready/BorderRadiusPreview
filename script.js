// get elements
const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.querySelector('.box');
const select = document.querySelector('select');
const button = document.querySelector('#copy');

// get elements to css text
const topLeftText = document.getElementById('top-left-text');
const topRightText = document.getElementById('top-right-text');
const bottomLeftText = document.getElementById('bottom-left-text');
const bottomRightText = document.getElementById('bottom-right-text');

// get element end, start
const startStart = document.getElementById('start-start');
const startEnd = document.getElementById('start-end');
const endStart = document.getElementById('end-start');
const endEnd = document.getElementById('end-end');

// create html element to copy
const htmlCopy = () => {
  topLeftText.innerHTML = `${topLeft.value + select.value};`;
  topRightText.innerHTML = `${topRight.value + select.value};`;
  bottomLeftText.innerHTML = `${bottomLeft.value + select.value};`;
  bottomRightText.innerHTML = `${bottomRight.value + select.value};`;
}

// change border radius
const changeBorderRadius = () => {
  box.style.borderRadius = `
  ${topLeft.value + select.value} 
  ${topRight.value + select.value} 
  ${bottomLeft.value + select.value} 
  ${bottomRight.value + select.value}`;
};

// change border radius
topLeft.addEventListener('input', () => {
  changeBorderRadius();
  htmlCopy();
});

topRight.addEventListener('input', () => {
  changeBorderRadius();
  htmlCopy();
});

bottomLeft.addEventListener('input', () => {
  changeBorderRadius();
  htmlCopy();
});

bottomRight.addEventListener('input', () => {
  changeBorderRadius();
  htmlCopy();
});

select.addEventListener('change', () => {
  changeBorderRadius();
  htmlCopy();
});

// copy to clipboard
button.addEventListener('click', () => {

});