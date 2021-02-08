import { provider } from '@/services'
import { ProjectRepositoryMixinInterface } from '@/ui/mixins/project-repository/project-repository.types'
import { Vue, Component } from 'vue-property-decorator'

@Component
export class ProjectRepositoryMixin extends Vue implements ProjectRepositoryMixinInterface {
  get projectRepository () {
    const services = provider()
    return services.projectRepository
  }
}
