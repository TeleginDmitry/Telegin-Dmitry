import { EmailService } from '@services/email/email.service'

const formElement = document.querySelector<HTMLFormElement>('#contact-form')

formElement?.addEventListener('submit', event => {
  event.preventDefault()

  const formData = new FormData(formElement)

  const name = formData.get('name')
  const email = formData.get('email')

  if (!name || !email) {
    return
  }

  const service = new EmailService()

  service.send(formData).then(() => {
    formElement.reset()
  })
})
