import { ProjectInterface } from '@/entities'

export interface ProjectRepositoryInterface {
  getAll (): ProjectInterface[];

  getOne (uuid: string): ProjectInterface | undefined;
}
