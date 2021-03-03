import data from '@/data/projects.json'
import { ProjectSearch, ProjectRepository, ProviderInterface } from '@/services'
import { AxiosRequestConfig } from 'axios'
import { ProjectRestClient } from '@/services/project-rest-client/project-rest-client'

const projectRepository = new ProjectRepository(data)

const config: AxiosRequestConfig = {
  // url: '/',
  baseURL: 'http://127.0.0.1:3000', // process.env.API_HTTP_BASE_URL,
  responseType: 'json'
}
const projectRestClient = new ProjectRestClient(config)

export const provider = (): ProviderInterface => ({
  projectRepository,
  projectSearch: new ProjectSearch(projectRepository),
  projectRestClient
})
