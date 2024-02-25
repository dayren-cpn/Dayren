import { Swiper } from 'swiper';
import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper/modules';


const sliderImg = new Swiper('.slider-img', {

   modules: [Parallax, Controller,],

   loop: false,
   speed: 2400,
   parallax: true,

})

const sliderText = new Swiper('.slider-content', {

   modules: [Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation],

   loop: false,
   speed: 2400,
   mousewheel: {
      invert: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },

   navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
   }
})

sliderImg.controller.control = sliderText;
sliderText.controller.control = sliderImg;








