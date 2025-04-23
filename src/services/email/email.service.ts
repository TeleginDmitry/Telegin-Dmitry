import { instance } from '@api/api.interceptor'

export class EmailService {
  async send(formData: FormData) {
    const response = await instance.post('send-email', formData)
    return response.data
  }
}
