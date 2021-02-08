import { provider } from '@/services'
import { ProjectSearchMixinInterface } from './project-search.types'
import { Vue, Component } from 'vue-property-decorator'

@Component
export class ProjectSearchMixin extends Vue implements ProjectSearchMixinInterface {
  get projectSearch () {
    const services = provider()
    return services.projectSearch
  }
}
