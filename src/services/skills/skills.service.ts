import { instance } from '@api/api.interceptor'
import { SkillsType } from '@types/skills.types'

export class SkillsService {
  async get(): Promise<SkillsType[]> {
    try {
      const response = await instance.get<SkillsType[]>('skills')
      return response.data.sort((a, b) => a.id - b.id)
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
