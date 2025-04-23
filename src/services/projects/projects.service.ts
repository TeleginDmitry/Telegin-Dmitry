import { instance } from '@api/api.interceptor'
import { ProjectType } from '@types/projects.types'

export class projectsService {
  async get(): Promise<ProjectType[]> {
    const response = await instance.get('projects')
    return response.data
  }
}
