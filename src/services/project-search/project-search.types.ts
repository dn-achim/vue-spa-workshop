import { SearchResultInterface } from '@/entities'

export interface ProjectSearchInterface {
  findOne (uuid: string): SearchResultInterface | undefined;

  filter (phrase: string): SearchResultInterface[];

  search (phrase: string): SearchResultInterface[];
}
