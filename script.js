const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.querySelector('.box');
const select = document.querySelector('select');

topLeft.addEventListener('input', () => {
  box.style.borderTopLeftRadius = topLeft.value + select.value;
});

topRight.addEventListener('input', () => {
  box.style.borderTopRightRadius = topRight.value + select.value;
});

bottomLeft.addEventListener('input', () => {
  box.style.borderBottomLeftRadius = bottomLeft.value + select.value;
});

bottomRight.addEventListener('input', () => {
  box.style.borderBottomRightRadius = bottomRight.value + select.value;
});

select.addEventListener('change', () => {
  box.style.borderTopLeftRadius = topLeft.value + select.value;
  box.style.borderTopRightRadius = topRight.value + select.value;
  box.style.borderBottomLeftRadius = bottomLeft.value + select.value;
  box.style.borderBottomRightRadius = bottomRight.value + select.value;
});
