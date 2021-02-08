import { Vue, Component } from 'vue-property-decorator'
import { ProjectRepository } from '@/services'
import { mockProjects } from '@/entities'
import { ProjectRepositoryMixinInterface } from '@/ui/mixins'

@Component
export class ProjectRepositoryMixinMock extends Vue implements ProjectRepositoryMixinInterface {
  get projectRepository () {
    return new ProjectRepository(mockProjects())
  }
}
