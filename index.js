const btnPrev = document.querySelector('.carousel-container a.prev');
const btnNext = document.querySelector('.carousel-container a.next');
const carousel = document.querySelector('.carousel-container .carousel');
const carouselSlide = document.querySelectorAll('.carousel .carousel-slide');
const radioButton = document.querySelectorAll('input.radio-button');

const size = 800;
let counter = 1;
let lastClick = 0;
let lastRadioButton = 1;

btnPrev.addEventListener(
  'click',
  (event) => {
    let d = new Date();
    let t = d.getTime();
    if (t - lastClick < 200) {
      alert('you click too fast!!');
      return;
    }
    lastClick = t;
    event.preventDefault();
    if (counter <= 0) return;
    carousel.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    carousel.style.transform = `translateX(${-(size * counter)}px)`;
    getCheckedInput();
  },
  false,
);
btnNext.addEventListener(
  'click',
  (event) => {
    let d = new Date();
    let t = d.getTime();
    if (t - lastClick < 200) {
      alert('you click too fast!!');
      return;
    }
    lastClick = t;
    event.preventDefault();
    if (counter >= carouselSlide.length - 1) return;
    carousel.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    carousel.style.transform = `translateX(${-(size * counter)}px)`;
    getCheckedInput();
  },
  false,
);
carousel.addEventListener(
  'transitionend',
  () => {
    if (carouselSlide[counter].id === 'lastClone') {
      carousel.style.transition = 'none';
      counter = carouselSlide.length - 2;
      carousel.style.transform = `translateX(${-(size * counter)}px)`;
    }
    if (carouselSlide[counter].id === 'firstClone') {
      carousel.style.transition = 'none';
      counter = carouselSlide.length - counter;
      carousel.style.transform = `translateX(${-(size * counter)}px)`;
    }
    getCheckedInput();
  },
  false,
);

function getCheckedInput() {
  for (radio of radioButton) {
    radio.checked = false;
  }
  lastRadioButton = counter % 4;
  let checkedInput = (counter - 1) % 4;
  switch (checkedInput) {
    case 0:
      radioButton[0].checked = true;
      break;
    case 1:
      radioButton[1].checked = true;
      break;
    case 2:
      radioButton[2].checked = true;
      break;
    case 3:
      radioButton[3].checked = true;
      break;
  }
}
