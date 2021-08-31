function swipeWithDots({slide, slider, indicatorTotalSelector, indicatorCurrentSelector, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {
    const slides = document.querySelectorAll(slide),
          sliderContainer = $(slider),
          indicatorTotal = document.querySelector(indicatorTotalSelector),
          indicatorCurrent = document.querySelector(indicatorCurrentSelector),
          widthIndicator = window.getComputedStyle(indicatorCurrent).width;

    let  slideIndex = 1,
         offsetIndicator = 0; 

    indicatorTotal.style.width = deleteNotDegets(widthIndicator) * (slides.length) + 'px';

    function deleteNotDegets(str) {
        return +str.replace(/\D/g, '');
    }

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

      function slideIndicatorUp() {
        if(offsetIndicator == deleteNotDegets(widthIndicator) * (slides.length-1)) {
            offsetIndicator = 0;
        } else {
            offsetIndicator += deleteNotDegets(widthIndicator);
        }

        indicatorCurrent.style.transform = `translateX(${offsetIndicator}px)`;
    }

    function slideIndexUp() {
      if(slideIndex == (slides.length)) {
          slideIndex = 1;
      } else {
          slideIndex++;
      }
  }

    sliderContainer.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');

        slideIndexUp();
        
        slideIndicatorUp(); 
    });
    

}

export default swipeWithDots;