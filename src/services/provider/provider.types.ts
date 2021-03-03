import {
  ProjectRestClientInterface,
  ProjectSearchInterface,
  ProjectRepositoryInterface
} from '@/services'

export interface ProviderInterface {
  projectRepository: ProjectRepositoryInterface;
  projectSearch: ProjectSearchInterface;
  projectRestClient: ProjectRestClientInterface;
}
