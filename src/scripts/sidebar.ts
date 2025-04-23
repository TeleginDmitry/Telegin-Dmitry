const burgerElement = document.querySelector('#burger')
const sidebarElement = document.querySelector('#sidebar')

burgerElement?.addEventListener('click', () => {
  sidebarElement?.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  sidebarElement?.classList.remove('active')
})
