import { ProjectInterface } from '@/entities'

export interface ProjectRestClientInterface {
  getAll (): Promise<ProjectInterface[]>;

  getOne (uuid: string): Promise<ProjectInterface | undefined>;

  search (token: string): Promise<ProjectInterface[]>;

  filter (token?: string): Promise<ProjectInterface[]>;
}
