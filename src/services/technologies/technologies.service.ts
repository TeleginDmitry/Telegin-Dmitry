import { instance } from '@api/api.interceptor'
import { TechnologyType } from '@types/technologies.types'

export class technologiesService {
  async get(): Promise<TechnologyType[]> {
    const response = await instance.get('technologies')
    return response.data
  }
}
