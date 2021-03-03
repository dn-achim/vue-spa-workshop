import { ProjectInterface } from '@/entities'
import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { ProjectRestClientInterface } from '@/services/project-rest-client/project-rest-client.types'

export class ProjectRestClient implements ProjectRestClientInterface {
  client: AxiosInstance

  constructor (config: AxiosRequestConfig) {
    this.client = Axios.create(config)
  }

  async getAll (): Promise<ProjectInterface[]> {
    try {
      const response: AxiosResponse<ProjectInterface[]> = await this.client.get<ProjectInterface[]>('/projects')
      return response.data
    } catch (error) {
      console.error('YOU SHOULD REALLY IMPROVE YOUR ERROR MANAGEMENT!!! 😖', { error })
      return []
    }
  }

  async getOne (uuid: string): Promise<ProjectInterface | undefined> {
    try {
      const response: AxiosResponse<ProjectInterface> = await this.client.get<ProjectInterface>(`/projects/${uuid}`)
      return response.data
    } catch (error) {
      console.error('YOU SHOULD REALLY IMPROVE YOUR ERROR MANAGEMENT!!! 😖', { error })
    }
  }

  async search (token: string): Promise<ProjectInterface[]> {
    try {
      const response: AxiosResponse<ProjectInterface[]> = await this.client.get<ProjectInterface[]>('/projects', { params: { q: token } })
      return response.data
    } catch (error) {
      console.error('YOU SHOULD REALLY IMPROVE YOUR ERROR MANAGEMENT!!! 😖', { error })
      return []
    }
  }

  async filter (token?: string): Promise<ProjectInterface[]> {
    return typeof token === 'string' && token.length > 0
      ? this.search(token)
      : this.getAll()
  }
}
