function swipeToRight({slider, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {
    const sliderContainer = $(slider);

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

    sliderContainer.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
      
    });
    
    sliderContainer.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
    }); 
}

export default swipeToRight;