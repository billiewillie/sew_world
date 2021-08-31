function sliderWithDots({slide, slider, prevArrow, nextArrow, currentCounter, indicatorTotalSelector, indicatorCurrentSelector, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {
    const slides = document.querySelectorAll(slide),
          current = document.querySelector(currentCounter),
          indicatorTotal = document.querySelector(indicatorTotalSelector),
          indicatorCurrent = document.querySelector(indicatorCurrentSelector),
          widthIndicator = window.getComputedStyle(indicatorCurrent).width,
          sliderContainer = $(slider),
          prev = $(prevArrow),
          next = $(nextArrow);
    
    let slideIndex = 1,
        offsetIndicator = 0; 

    sliderContainer.slick({
        arrows: arrowsPar,
        dots: dotsPar,
        speed: speedPar,
        initialSlide: firstSlidePar,
        variableWidth: variableWidthPar,
        centerMode: centerModePar,
        slidesToShow: slidesToShowPar,
        slidesToScroll: slidesToScrollPar,
      });

    indicatorTotal.style.width = deleteNotDegets(widthIndicator) * (slides.length) + 'px';

    function deleteNotDegets(str) {
        return +str.replace(/\D/g, '');
    }
   
    if(slides.length < 10){
        current.textContent = `/0${slideIndex}`;
    } else {
        current.textContent = `/${slideIndex}`;
    }

    function currentSlide() {
        if(slides.length < 10){
            current.textContent = `/0${slideIndex}`;
        } else {
            current.textContent = `/${slideIndex}`;
        }
    }

    function undesablaedPrev() {
        if(slideIndex == 1) {
            prev.disabled = true;
        } else {
            prev.disabled = false;
        }
    }

    function slideIndexUp() {
        if(slideIndex == (slides.length)) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    }

    function slideIndexdown() {
        if(slideIndex == 1) {
            slideIndex = (slides.length);
        } else {
            slideIndex--;
        }
    }

    function slideIndicatorUp() {
        if(offsetIndicator === deleteNotDegets(widthIndicator) * (slides.length-1)) {
            offsetIndicator = 0;
        } else {
            offsetIndicator += deleteNotDegets(widthIndicator);
        }
    }

    function slideIndicatordown() {
        if(offsetIndicator === 0) {
            offsetIndicator = deleteNotDegets(widthIndicator) * (slides.length-1);
        } else {
            offsetIndicator -= deleteNotDegets(widthIndicator);
        }
    }

    function goToRight() {
        sliderContainer.slick('slickNext');
        slideIndexUp();
        currentSlide();
        undesablaedPrev();
        slideIndicatorUp();
        indicatorCurrent.style.transform = `translateX(${offsetIndicator}px)`;
    }

    function goToLeft() {
        sliderContainer.slick('slickPrev');
        slideIndexdown();
        currentSlide();
        undesablaedPrev();
        slideIndicatordown();
        indicatorCurrent.style.transform = `translateX(${offsetIndicator}px)`;
    }

    prev.on("click", function(event) {
        event.preventDefault();
        goToLeft();
       
    });
    
    next.on("click", function(event) {
        event.preventDefault();

        goToRight();
    });


    sliderContainer.on("swipe", function(event) {
        event.preventDefault();
        goToRight(); 
    });
    
}

export default sliderWithDots;