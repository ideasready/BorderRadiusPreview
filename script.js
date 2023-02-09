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


// change border radius
topLeft.addEventListener('input', () => {
  box.style.borderTopLeftRadius = topLeft.value + select.value;
  topLeftText.innerHTML = `${topLeft.value + select.value};`;
});

topRight.addEventListener('input', () => {
  box.style.borderTopRightRadius = topRight.value + select.value;
  topRightText.innerHTML = `${topRight.value + select.value};`;
});

bottomLeft.addEventListener('input', () => {
  box.style.borderBottomLeftRadius = bottomLeft.value + select.value;
  bottomLeftText.innerHTML = `${bottomLeft.value + select.value};`;
});

bottomRight.addEventListener('input', () => {
  box.style.borderBottomRightRadius = bottomRight.value + select.value;
  bottomRightText.innerHTML = `${bottomRight.value + select.value};`;
});

select.addEventListener('change', () => {
  box.style.borderTopLeftRadius = topLeft.value + select.value;
  box.style.borderTopRightRadius = topRight.value + select.value;
  box.style.borderBottomLeftRadius = bottomLeft.value + select.value;
  box.style.borderBottomRightRadius = bottomRight.value + select.value;

  topLeftText.innerHTML = `${topLeft.value + select.value};`;
  topRightText.innerHTML = `${topRight.value + select.value};`;
  bottomLeftText.innerHTML = `${bottomLeft.value + select.value};`;
  bottomRightText.innerHTML = `${bottomRight.value + select.value};`;
});

// copy to clipboard
button.addEventListener('click', () => {
  navigator.clipboard.writeText(
    `
    border-top-left-radius: ${topLeft.value + select.value};
    border-top-right-radius: ${topRight.value + select.value};
    border-bottom-left-radius: ${bottomLeft.value + select.value};
    border-bottom-right-radius: ${bottomRight.value + select.value};
    `
  );
});