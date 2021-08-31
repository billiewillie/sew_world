function ourTeamSwiper(slide, field, indicatorLine, indicatorDot) {
    const slides = document.querySelectorAll(slide),
          slidesField = document.querySelector(field),
          total = document.querySelector(indicatorLine),
          current = document.querySelector(indicatorDot),
          widthIndicator = window.getComputedStyle(current).width;

    let offset = 0; 
    let offsetIndicator = 0;
    let slideWidth;


    slidesField.style.width = 100 * slides.length + '%';
    total.style.width = deleteNotDegets(widthIndicator) * slides.length + 'px';

    slides.forEach(slide => {
        slideWidth = slide.clientWidth;
    });

    function deleteNotDegets(str) {
        return +str.replace(/\D/g, '');
    }

    function swipeToRight() {
        if(offset == (slideWidth + 20) * (slides.length - 1)) {
            offset = 0;
            offsetIndicator = 0;
        } else {
            offset += slideWidth + 20;
            offsetIndicator += deleteNotDegets(widthIndicator);
        }
           
        slidesField.style.transform = `translateX(-${offset}px)`;
        current.style.transform = `translateX(${offsetIndicator}px)`;
    }

    function swipeToLeft() {
        if(offset == 0) {            
            offset = (slideWidth + 40) * (slides.length - 1);
            offsetIndicator = deleteNotDegets(widthIndicator) * (slides.length - 1);
        } else {
            offset -= slideWidth + 40;
            offsetIndicator -= deleteNotDegets(widthIndicator);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        current.style.transform = `translateX(${offsetIndicator}px)`;
    }

    let manager = new Hammer.Manager(slidesField);
    let Swipe = new Hammer.Swipe();
    manager.add(Swipe);
    
    manager.on('swipeleft', function(e) {
        swipeToRight();
    });

    manager.on('swiperight', function(e) {
        swipeToLeft()
    });

    if(slidesField.onFocus){
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowRight") { 
                swipeToRight();
            } else if (e.code === "ArrowLeft"){
                swipeToLeft();
            }
        });
    }
}

export default ourTeamSwiper;