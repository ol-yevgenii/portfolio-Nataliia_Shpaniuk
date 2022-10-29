import * as myFunction from "./modules/function.js";
import * as typed from './modules/typedText.js';
import * as scroll from './modules/scrollToSection.js';
import * as burger from './modules/burger.js';

myFunction.isWebp();
typed.typedText();
scroll.sctollToSection();
burger.burger();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

import Swiper, { Lazy, Navigation, Pagination } from 'swiper';

new Swiper('.image-slider', {

    modules: [Navigation, Pagination, Lazy ],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
    },
  
    // grabCursor: true,
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  
    mousewheel: {
      sensitivity: 1,
      eventsTarget: ".image-slider"
    },
    
    watchOverflow: true,
  
    // slidesPerView: 3,
  
    spaceBetween: 10,
  
    loop: true,
  
    speed: 300,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      668: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    },
  
    preloadImages: false,
      
    lazy: {
      loadOnTransitionStart: true,
  
      loadPrevNext: false,
    },
  
    watchSlidesProgress: true,
  
    watchSlidesVisibility: true,
  
  });

  
