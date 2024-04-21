import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  speed: 800,

  modules: [Navigation],
});
