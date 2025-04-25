import { instance } from '@api/api.interceptor'
import { ProjectType } from '@types/projects.types'

export class ProjectsService {
  async get(): Promise<ProjectType[]> {
    try {
      const response = await instance.get<ProjectType[]>('projects')
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
