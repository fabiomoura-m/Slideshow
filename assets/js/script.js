let totalSlides = document.querySelectorAll('.slider-item').length;
let sliderHeight = document.querySelector('.slider').clientHeight;
let currentSlide = 0;

document.querySelector(
  '.slider-container'
).style.width = `calc(100vw * ${totalSlides})`; // deixando a largura do slider container de acordo com a quantidade de slides

document.querySelector('.slider-controls').style.height = `${sliderHeight}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(
    '.slider-container'
  ).style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);
