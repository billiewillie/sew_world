document.querySelectorAll('[data-slider]').forEach(function (slider, i) {
  var slides = slider.querySelector('[data-slider-slides]'),
    slidesCount = slides.children.length,
    sliderData = slider.dataset.slider,
    options = sliderOptions[sliderData],
    items = slider.dataset.items,
    // кол-во слайдов при инициализации
    sliderWidth = slides.offsetWidth;

  // Задаём ширину одного слайда
  if (items) {
    [].forEach.call(slides.children, function (slide, k) {
      slide.style.width = 100 / items + '%';
    });
  }

  var slideWidth = slides.children[0].offsetWidth,
    slidesCapacity = Math.round(sliderWidth / slideWidth),
    controls = slider.querySelector('[data-slider-controls]'),
    controlsEndIndex = slidesCount - slidesCapacity,
    adaptive = Number(slider.dataset.sliderAdaptive),
    windowWidth = window.innerWidth;

  var controlsPrev = void 0,
    controlsNext = void 0;


  if (controls) {
    controlsPrev = controls.querySelector('[data-slider-controls-prev]'), controlsNext = controls.querySelector('[data-slider-controls-next]');
  }

  if (slidesCount > slidesCapacity) {
    slider.classList.add('slider_initial');
    var flkty = new Flickity(slides, options);

    if (sliderData === 'team') {
      flkty.on('change', function (index) {
        var selectedSlide = flkty.selectedElement,
          personImg = $(selectedSlide).find('[data-person]').data('person') || '';

        $('.about__image img').fadeOut(400, function () {
          $(this).attr('src', personImg).fadeIn(400);
        });

      });
    }

    if (sliderData === 'banner') {
      flkty.on('change', function (index) {
        var selectedSlide = flkty.selectedElement;
        var slidesNotSelected = document.querySelectorAll('.slider__slide_banner');
        slidesNotSelected.forEach(function (elem) {
          elem.querySelector('span').classList.remove('animation-title');
          elem.querySelector('.offer__image').classList.remove('animation-image');

        })

        selectedSlide.querySelector('span').classList.add('animation-title');
        selectedSlide.querySelector('.offer__image').classList.add('animation-image');
      });
    }

    if (controls) {
      controlsPrev.addEventListener('click', function (e) {
        e.preventDefault();
        flkty.previous();

        if ($(window).width() <= 768) {
          var gallery = $(slider).closest('.gallery');

          if (gallery) {
            var selected = $(gallery).find('.gallery__item_selected');
            var index = Number($(selected).data('index')),
              allIndex = $(gallery).find('.gallery__item').length - 1;
            --index;
            $(selected).removeClass('gallery__item_selected');

            if (index < 0) {
              $(gallery).find('.gallery__item').get(allIndex).click();
            } else if (index > allIndex) {
              $(gallery).find('.gallery__item').get(0).click();
            } else {
              $(gallery).find('.gallery__item').get(index).click();
            }
          }
        }
      });

      controlsNext.addEventListener('click', function (e) {
        e.preventDefault();
        flkty.next();
        if ($(window).width() <= 768) {
          var gallery = $(slider).closest('.gallery');

          if (gallery) {
            var selected = $(gallery).find('.gallery__item_selected');
            var index = Number($(selected).data('index')),
              allIndex = $(gallery).find('.gallery__item').length - 1;
            ++index;
            $(selected).removeClass('gallery__item_selected');

            if (index < 0) {
              $(gallery).find('.gallery__item').get(allIndex).click();
            } else if (index > allIndex) {
              $(gallery).find('.gallery__item').get(0).click();
            } else {
              $(gallery).find('.gallery__item').get(index).click();
            }
          }
        }
      });

      if (!options.wrapAround) {
        if (flkty.selectedIndex === 0) {
          controlsPrev.disabled = true;
        } else if (flkty.selectedIndex === slides.length - 1) {
          controlsNext.disabled = true;
        }

        flkty.on('select', function (index) {
          controlsPrev.disabled = index == 0 ? true : false;
          controlsNext.disabled = index == controlsEndIndex ? true : false;
        });

        flkty.on('change', function (index) {
          if (index >= controlsEndIndex) {
            flkty.select(controlsEndIndex);
          }
        });
      }
    }
  }
});