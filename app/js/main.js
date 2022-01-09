//const autoPrefixer = require("gulp-autoprefixer");

$(function () {


 
   $('.main-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      });


   $('.nav__catalog').on('click', function(){
    $(this).toggleClass('nav__catalog--active')
   });

});

var mixer = mixitup('.catalog__inner');