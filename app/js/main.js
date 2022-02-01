//const autoPrefixer = require("gulp-autoprefixer");

//const { removeListener } = require("gulp");


$(function () {
 
   $('.main-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              adaptiveHeight: true,
              infinite:true
            }
          }
        ]
      });

      $('.slider-brend__inner').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
          {
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

   $('.nav__catalog').on('click', function(){
    $(this).toggleClass('nav__catalog--active')
   });

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

  /*const menubtn = document.querySelector('.menu-btn');
  const menulist = document.querySelector('.mobail')
  const navLinks = document.querySelectorAll('.mobail__link');
  const menuclouse = document.querySelector('.mobail__btn');
  
  function toggleMenu() {
      menubtn.classList.toggle('active');
      
  } 
  menubtn.addEventListener('click', toggleMenu );
  menulist.addEventListener('click', toggleMenu );
  navLinks.forEach((el) => el.addEventListener('click', closeMenu));*/
  
  const hamburger = document.querySelector('.menu-btn');
  const menulist = document.querySelector('.mobail');
  const closebtn = document.querySelector('.mobail__btn');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    menulist.classList.toggle('active');
   
  }
  hamburger.addEventListener('click', toggleMenu);
  closebtn.addEventListener('click',toggleMenu );