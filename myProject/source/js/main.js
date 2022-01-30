const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
const squares = document.querySelectorAll('.square')
let width;
let height;


function init() {
  console.log('resize');
  width = document.querySelector('.current-slide').offsetWidth;
  images.forEach(item => {
      item.style.height = 'auto';
      item.style.width = width + 'px';
  });
  height = images[0].offsetHeight
  document.querySelector('.current-slide').style.height = height + 'px'
  sliderLine.style.height = height * images.length + 'px';
  rollSlider();
}



document.querySelector('#next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('#prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(0, -' + count * height + 'px)';
  squares.forEach(item => item.style.background = "none");
  if (count === 0) {
    squares[0].style.background = "#fff";
  } else if (count === 1) {
    squares[1].style.background = "#fff";
  } else if (count === 2) {
    squares[2].style.background = "#fff";
  }
};

const sqSlide = (num) => {
  count = num
  rollSlider()
}
init();
window.addEventListener('resize', init);



