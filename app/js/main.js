//const autoPrefixer = require("gulp-autoprefixer");

$(function () {
 
   $('.main-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      });

      $('.slider-brends__inner').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        adaptiveHeight: true,
        arrows: false
      });

   $('.nav__catalog').on('click', function(){
    $(this).toggleClass('nav__catalog--active')
   });

   $('.catalog__inne').mixItUp({
    selectors: {
      filter: '.filter'
    }
  });

  $('.promo-card__inner').mixItUp({
    selectors: {
      filter: '.filter2'
    }
  });
  

});


var containerCard = document.querySelector('[data-ref="navigation-mix__container-card"]');
var containerPromo = document.querySelector('[data-ref="navigation-mix__container-promo"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerCard, config);
  var mixer2 = mixitup(containerPromo, config);