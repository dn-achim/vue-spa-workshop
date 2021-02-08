import { SearchResultInterface, mockProjects } from '@/entities'

export const mockSearchResults = (): SearchResultInterface[] =>
  mockProjects().map((elem, idx) => ({
    item: elem,
    score: 1,
    refIndex: idx
  }))
