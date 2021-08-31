function sliderWithoutnumbers({slider, prevArrow, nextArrow, arrowsPar, dotsPar, speedPar, firstSlidePar, variableWidthPar,centerModePar, slidesToShowPar, slidesToScrollPar}) {
    const sliderContainer = $(slider),
          prev = $(prevArrow),
          next = $(nextArrow);

    sliderContainer.slick({
        arrows: arrowsPar,
        dots: dotsPar,
        speed: speedPar,
        initialSlide: firstSlidePar,
        variableWidth: variableWidthPar,
        centerMode: centerModePar,
        slidesToShow: slidesToShowPar,
        slidesToScroll: slidesToScrollPar,
        rows: 1,
        slidesPerRow: 1
      });


    prev.on("click", function(event) {
        event.preventDefault();
        sliderContainer.slick('slickPrev');
    });
    
    next.on("click", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
    });

    prev.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
    });
    
    next.on("swipe", function(event) {
        event.preventDefault();

        sliderContainer.slick('slickNext');
    });   
   
}


export default sliderWithoutnumbers;