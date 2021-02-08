import { Project, ProjectInterface } from '@/entities'
import { ProjectRepositoryInterface } from '@/services'

export class ProjectRepository implements ProjectRepositoryInterface {
  constructor (private readonly data: ProjectInterface[]) {
    this.data = data
  }

  getAll (): Project[] {
    return this.data.map(elem => new Project(elem))
  }

  getOne (uuid: string): Project | undefined {
    const project = this.data.find(elem => elem.uuid === uuid)
    if (project) {
      return new Project(project)
    }
  }
}
