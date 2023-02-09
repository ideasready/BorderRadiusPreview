// get elements
const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.querySelector('.box');
const select = document.querySelector('select');
const button = document.querySelector('#copy');
const check = document.querySelector('#check');


// get elements to css text
const borderRadius = document.getElementById('border-radius-text');

// get element end, start
const startStart = document.getElementById('start-start');
const startEnd = document.getElementById('start-end');
const endStart = document.getElementById('end-start');
const endEnd = document.getElementById('end-end');

const start = document.getElementById('start');
const end = document.getElementById('end');


// change border radius
const changeBorderRadius = () => {
  const enableEight = check.checked;

  const textWithPercent = `
  ${topLeft.value + select.value} 
  ${topRight.value + select.value} 
  ${bottomLeft.value + select.value} 
  ${bottomRight.value + select.value}  
  / 
  ${startStart.value + select.value} 
  ${startEnd.value + select.value} 
  ${endStart.value + select.value} 
  ${endEnd.value + select.value} 
  `

  const textNotWithPercent = `
  ${topLeft.value + select.value} 
  ${topRight.value + select.value} 
  ${bottomLeft.value + select.value} 
  ${bottomRight.value + select.value}`

  if (!enableEight) {
    box.style.borderRadius = textNotWithPercent;
    borderRadius.innerHTML = textNotWithPercent;
  } else {
    box.style.borderRadius = textWithPercent;
    borderRadius.innerHTML = textWithPercent;
  }
};

// enable start, end
const enableStartEnd = () => {
  changeBorderRadius();
  if (check.checked && select.value !== '%') {
    alert('Only in mode "%"');
    check.checked = false;
    enableStartEnd();
  } else if (check.checked && select.value === '%') {
    start.style.display = 'flex';
    end.style.display = 'flex';
  } else {
    start.style.display = 'none';
    end.style.display = 'none';
  }
};
enableStartEnd();

// events  top, bottom, left, right
topLeft.addEventListener('input', () => {
  changeBorderRadius();
});

topRight.addEventListener('input', () => {
  changeBorderRadius();
});

bottomLeft.addEventListener('input', () => {
  changeBorderRadius();
});

bottomRight.addEventListener('input', () => {
  changeBorderRadius();
});

// events  start, end
startStart.addEventListener('input', () => {
  changeBorderRadius();
});

startEnd.addEventListener('input', () => {
  changeBorderRadius();
});

endStart.addEventListener('input', () => {
  changeBorderRadius();
});

endEnd.addEventListener('input', () => {
  changeBorderRadius();
});

// change select
select.addEventListener('change', () => {
  changeBorderRadius();
  enableStartEnd();
});

check.addEventListener('change', () => {
  enableStartEnd();
});

// copy to clipboard
button.addEventListener('click', () => {
  navigator.clipboard.writeText(`border-radius: ${borderRadius.innerHTML}`);
});