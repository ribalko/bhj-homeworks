const sliderItems = document.querySelectorAll('.slider__item');
const navSliderArrowLeft = document.querySelector('.slider__arrow_prev');
const navSliderArrowRight = document.querySelector('.slider__arrow_next');

function nextSlide() {
    
    for (let i = 0; i < sliderItems.length; i++) {     
        if (sliderItems[i].classList.contains('slider__item_active')) {     
            sliderItems[i].classList.remove('slider__item_active');
            if (i === sliderItems.length - 1) {
                i = 0;
            }
            else {
                i +=1;
            }
            sliderItems[i].classList.add('slider__item_active');
            return;
        }
    }

}

function prevSlide() {

    for (let i = sliderItems.length - 1; i < sliderItems.length; i--) {     

        if (sliderItems[i].classList.contains('slider__item_active')) {     
            sliderItems[i].classList.remove('slider__item_active');

            if (i === 0) {
                i = sliderItems.length - 1;
            }
            else {
                i -= 1;
            }
            sliderItems[i].classList.add('slider__item_active');
            return;
        }
    }

}

navSliderArrowLeft.addEventListener('click', prevSlide);
navSliderArrowRight.addEventListener('click', nextSlide);