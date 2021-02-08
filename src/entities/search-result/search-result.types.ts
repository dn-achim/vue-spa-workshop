import { ProjectInterface } from '@/entities'

export interface SearchResultInterface {
  item: ProjectInterface;
  refIndex: number;
  score?: number;
}
