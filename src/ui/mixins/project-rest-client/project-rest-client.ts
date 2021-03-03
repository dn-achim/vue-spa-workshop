import { provider } from '@/services'
import { ProjectRestClientMixinInterface } from './project-rest-client.types'
import { Vue, Component } from 'vue-property-decorator'

@Component
export class ProjectRestClientMixin extends Vue implements ProjectRestClientMixinInterface {
  get projectRestClient () {
    const services = provider()
    return services.projectRestClient
  }
}
