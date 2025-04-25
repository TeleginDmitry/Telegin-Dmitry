import { STATIC_URL } from '@configs/api.config'
import { ProjectsService } from '@services/projects/projects.service'

const swiperWrapperElement = document.querySelector(
  '#portfolio-swiper .swiper-wrapper'
)

new Promise(() => {
  const service = new ProjectsService()
  service.get().then(projects => {
    projects.forEach(({ description, image, link }) => {
      const words = description.split(' ')
      const firstWord = words[0]

      words.shift()

      swiperWrapperElement?.insertAdjacentHTML(
        'beforeend',
        `<div class="swiper-slide">
          <div class="container">
            <img
              class="image"
              src="${STATIC_URL}${image}"
              alt="Превью проекта"
              loading="lazy"
            />
            <a
              target="_blank"
              class="link"
              href="${link}"
              rel="noopener"
            ></a>
          </div>

          <p class="description">
            <span>${firstWord}</span> ${words.join(' ')}
          </p>
        </div>`
      )
    })
  })
})
