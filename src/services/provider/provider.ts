import data from '@/data/projects.json'
import { ProjectSearch, ProjectRepository, ProviderInterface } from '@/services'

const projectRepository = new ProjectRepository(data)

export const provider = (): ProviderInterface => ({
  projectRepository,
  projectSearch: new ProjectSearch(projectRepository)
})
