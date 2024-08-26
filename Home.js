const slider = document.querySelector('.slider');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-container img');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

const autoSlide = () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

setInterval(autoSlide, 3000); // Change image every 3 seconds


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});
