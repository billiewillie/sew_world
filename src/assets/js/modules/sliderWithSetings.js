
function sliderWithSetings({slide, slider, prevArrow, nextArrow, totalCounter, currentCounter, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {
    const slides = document.querySelectorAll(slide),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderContainer = $(slider),
          prev = $(prevArrow),
          next = $(nextArrow);
    
    let slideIndex = 1; 

    sliderContainer.slick({
        arrows: arrowsPar,
        dots: dotsPar,
        speed: speedPar,
        initialSlide: firstSlidePar,
        variableWidth: variableWidthPar,
        centerMode: centerModePar,
        slidesToShow: slidesToShowPar,
        slidesToScroll: slidesToScrollPar,
        autoplay: true,
        autoplaySpeed: 3000,
      });
   
    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    function currentSlide() {
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
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
        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    }

    function slideIndexdown() {
        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    }

    prev.on("click", function(event) {
        event.preventDefault();
        sliderContainer.slick('slickPrev');
        slideIndexdown();
        currentSlide();
        undesablaedPrev();
    });
    
    next.on("click", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
        slideIndexUp();
        currentSlide();
        undesablaedPrev();
    });

    sliderContainer.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');

        slideIndexUp();
        
        currentSlide();
    });
   
}

export default sliderWithSetings;
