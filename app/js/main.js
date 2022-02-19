//const autoPrefixer = require("gulp-autoprefixer");

//const { removeListener } = require("gulp");


$(function () {
  $('.main-slider__list .main-slider__inner').wrap('<div class="slick-item"></div>');

  $('.main-slider__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,

    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true
      }
    }]
  });

  $('.slider-brend__inner').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    adaptiveHeight: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]

  });

 

  let $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 0,
  max = 1000,
  from = 0,
  to = 0;

$range.ionRangeSlider({
skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});


  $('.nav__catalog').on('click', function () {
    $(this).toggleClass('nav__catalog--active')
  });

/-------aside кнопка при клике меняет положение --------/
  $('.aside__arrow').on('click', function () {
    $(this).toggleClass('aside__arrow--active');
    
  });



/------ блок hight 0 -----------/

  $('.aside__arrow').on('click', function(){
    $('.aside__list').toggleClass('active');
   
  });


/-------button меняет положение карточки товара  на page.html-------/
  $('.button-list').on('click', function(){
    $('.catalog__inner').toggleClass('line')
  });



  $('.button-vertically').on('click', function(){
    $('.catalog__inner').removeClass('line')
  });


  /------------mix it up/

  $('.catalog__inne').mixItUp({
    selectors: {
      filter: '.filter'
    }
  });

  $('.stock-card__inner').mixItUp({
    selectors: {
      filter: '.filter2'
    }
  });   


});




var containerCard = document.querySelector('[data-ref="navigation-mix__card"]');
var containerPromo = document.querySelector('[data-ref="navigation-mix__stock"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerCard, config);
var mixer2 = mixitup(containerPromo, config);



const hamburger = document.querySelector('.burger');
const menulist = document.querySelector('.mobile-menu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  menulist.classList.toggle('active');

}

hamburger.addEventListener('click', toggleMenu);



/*
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const bodyLock = document.querySelector('body');

    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('menu--active');

      if(mobileMenu.classList.contains('menu--active')) {
        burger.classList.add('burger--active');
        bodyLock.classList.add('lock')
      } else {
        burger.classList.remove('burger--active');
        bodyLock.classList.remove('lock');

      }

    })
  });*/
  