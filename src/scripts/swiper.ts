import Swiper from "swiper";
import "swiper/css";

new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
