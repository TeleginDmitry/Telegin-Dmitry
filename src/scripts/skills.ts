import { SkillsService } from '@services/skills/skills.service'

const mainSkillsListElement = document.querySelector('.skills__list_main')
const skillsListElement = document.querySelector('.skills__list')

new Promise(() => {
  const service = new SkillsService()
  service.get().then(skills => {
    skills.forEach(({ name, color, isMain }) => {
      ;(isMain ? mainSkillsListElement : skillsListElement)?.insertAdjacentHTML(
        'beforeend',
        `<li class="skill"><span style="background-color: ${color}"></span>${name}</li>`
      )
    })
  })
})
