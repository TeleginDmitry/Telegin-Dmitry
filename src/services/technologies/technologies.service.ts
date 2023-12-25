import { instance } from "src/api/api.interceptor";
import { TechnologyType } from "src/types/technologies.types";

export class technologiesService {
  async get(): Promise<TechnologyType[]> {
    const response = await instance.get("technologies");
    return response.data;
  }
}
