import data from '@/data/projects.json'
import { ProjectRepository, ProviderInterface } from '@/services'

const projectRepository = new ProjectRepository(data)

export const provider = (): ProviderInterface => ({
  projectRepository
})
