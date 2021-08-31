function fullSlider({slide, slider, prevArrow, nextArrow, currentDot, mainContainerSelector, sliderBoxSelector, slideItemSelector, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {  
    const slides = document.querySelectorAll(slide),
          current = document.querySelectorAll(currentDot),
          slideItem = document.querySelectorAll(slideItemSelector),
          sliderBox = document.querySelector(sliderBoxSelector),
          sliderContainer = $(slider),
          prev = $(prevArrow),
          next = $(nextArrow),
          mainContainer = document.querySelector(mainContainerSelector);
    
    let slideIndex = 1,
        slederboxWidth; 

        slederboxWidth = window.getComputedStyle(sliderBox).width;

    console.log(current);

    slideItem.forEach(slide => {
        slide.style.width = slederboxWidth;
    });

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
   
    function currentSlide() {
        current.forEach(num => {
            num.classList.remove("count--current");
        })
        current[slideIndex-1].classList.add("count--current");
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

    function goToStart() {
        mainContainer.scrollIntoView({block:"start", behavior: "smooth"});
    }

    prev.on("click", function(event) {
        event.preventDefault();
        sliderContainer.slick('slickPrev');
        goToStart();
        slideIndexdown();
        currentSlide();
        undesablaedPrev();
    });
    
    next.on("click", function(event) {
        event.preventDefault();
        
        sliderContainer.slick('slickNext');
        goToStart();
        slideIndexUp();
        currentSlide();
        undesablaedPrev();
         
    });

    prev.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
        slideIndexUp();
        currentSlide();
        undesablaedPrev();
        goToStart();
    });

    // dots.forEach(dot => { /*на каждую точку в массиве навешываем событие*/
    //     dot.addEventListener('click', (e) => {
    //         const slideTo = e.target.getAttribute('data-slide-to');

    //         slideIndex = slideTo;
    //         offset = deleteNotDegets(width) * (slideTo - 1);

    //         slidesField.style.transform = `translateX(-${offset}px)`;

    //         currentSlide();
    //     });
    // });
   
}

export default fullSlider;