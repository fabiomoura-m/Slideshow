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
  let widthClient = document.body.clientWidth;
  let newMargin = currentSlide * widthClient;
  document.querySelector(
    '.slider-container'
  ).style.marginLeft = `-${newMargin}px`;
}
