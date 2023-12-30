import { projectsService } from "services/projects/projects.service";
import { API_URL } from "configs/api.config";

const swiperWrapperElement = document.querySelector(".swiper-wrapper");

new Promise((resolve, reject) => {
  const service = new projectsService();
  service.get().then((projects) => {
    projects.forEach(({ description, image, link }) => {
      const words = description.split(" ");
      const firstWord = words[0];

      words.shift();

      swiperWrapperElement?.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide">
        <div class="container">
          <img
            class="image"
            src="${API_URL}${image}"
            alt="project"
          />
          <a
            target="_blank"
            class="link"
            href="${link}"
          ></a>
        </div>

        <p class="description">
          <span>${firstWord}</span> ${words.join(" ")}
        </p>
      </div>`,
      );
    });
  });
});
