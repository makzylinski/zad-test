const arrowRight = document.querySelector('.right');
const arrowLeft = document.querySelector('.left');
const sliderPhoto = document.querySelector('.slider');
const sliderDots = document.querySelectorAll('.dot');

const photoPath = './assets/images/';
let currentSlideIndex = 0;
let transitionSlideIndex = 0;
const sliderPhotos = [
    { path: `${photoPath}background.png` },
    { path: `${photoPath}info-1.png` },
    { path: `${photoPath}logo.png`}
];

arrowRight.addEventListener('click', () => {
    transitionSlideIndex = currentSlideIndex + 1;
    if(transitionSlideIndex < sliderPhotos.length) {
        sliderPhoto.style.backgroundImage = `url(${sliderPhotos[transitionSlideIndex].path})`
        sliderDots[currentSlideIndex].classList.remove('active');
        sliderDots[transitionSlideIndex].classList.add('active');
        currentSlideIndex = currentSlideIndex + 1;
    } else {
        sliderDots[currentSlideIndex].classList.remove('active');
        sliderDots[0].classList.add('active');
        currentSlideIndex = 0;
        sliderPhoto.style.backgroundImage = `url(${sliderPhotos[currentSlideIndex].path})`
    }
})

arrowLeft.addEventListener('click', () => {
    transitionSlideIndex = currentSlideIndex - 1;
    if(transitionSlideIndex >= 0) {
        sliderPhoto.style.backgroundImage = `url(${sliderPhotos[transitionSlideIndex].path})`
        sliderDots[currentSlideIndex].classList.remove('active');
        sliderDots[transitionSlideIndex].classList.add('active');
        currentSlideIndex = currentSlideIndex - 1;
    } else {
        sliderDots[currentSlideIndex].classList.remove('active');
        sliderDots[0].classList.add('active');
        transitionSlideIndex = 0;
        currentSlideIndex = 0;
        sliderPhoto.style.backgroundImage = `url(${sliderPhotos[currentSlideIndex].path})`
    }
})