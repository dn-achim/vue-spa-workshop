import { Vue, Component } from 'vue-property-decorator'
import { mockProjects } from '@/entities'
import { ProjectRepository, ProjectSearch, ProjectSearchInterface } from '@/services'
import { ProjectSearchMixinInterface } from './project-search.types'

@Component
export class ProjectSearchMixinMock extends Vue implements ProjectSearchMixinInterface {
  get projectSearch (): ProjectSearchInterface {
    return new ProjectSearch(new ProjectRepository(mockProjects()))
  }
}
