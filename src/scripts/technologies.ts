import { technologiesService } from '@services/technologies/technologies.service'

const skillsListElement = document.querySelector('.skills__list')

new Promise(() => {
  const service = new technologiesService()
  service.get().then(technologies => {
    technologies.forEach(({ name, color }) => {
      skillsListElement?.insertAdjacentHTML(
        'beforeend',
        `<li class="skill"><span style="background-color: ${color}"></span>${name}</li>`
      )
    })
  })
})
