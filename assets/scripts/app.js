const arrowRight = document.querySelector('.right');
const arrowLeft = document.querySelector('.left');
const sliderPhoto = document.querySelector('.slider');
const sliderDots = document.querySelectorAll('.dot');
const navbar = document.querySelector('.navbar');

const photoPath = './assets/images/';
let currentSlideIndex = 0;
let transitionSlideIndex = 0;
const sliderPhotos = [
    { path: `${photoPath}background.png` },
    { path: `${photoPath}info-1.png` },
    { path: `${photoPath}logo.png`}
];

/*arrowRight.addEventListener('click', () => {
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
})*/

window.onscroll = () => {
    let top = window.scrollY;
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(vh)
    if(top >= vh/3) {
        navbar.classList.add('navbar--active');
    } else {
        navbar.classList.remove('navbar--active');
    }
}

function initMap() {
    const options = {
        zoom: 14,
        center: { lat: 52.4064, lng: 16.9152 }
    }

    const map = new google.maps.Map(document.querySelector('.footer__google-map'), options);

    const marker = new google.maps.Marker({
        position: { lat: 52.403190, lng: 16.910160 },
        map: map
    });
}
