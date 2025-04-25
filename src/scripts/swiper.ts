import Swiper from 'swiper'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

new Swiper('#gallery-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 25,
  speed: 650,
  autoplay: true,
  breakpoints: {
    425: {
      slidesPerView: 3,
      initialSlide: 1
    },
    768: {
      slidesPerView: 4,
      initialSlide: 1
    }
  },
  modules: [Navigation]
})

new Swiper('#portfolio-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  speed: 800,
  autoplay: true,
  modules: [Navigation]
})
