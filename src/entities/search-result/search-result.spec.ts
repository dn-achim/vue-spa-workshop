import { SearchResult, mockSearchResults } from '@/entities'

describe('>>> SearchResult', () => {
  describe('>> Constructor', () => {
    it('"score" soll nur instantiiert sein, wenn als Parameter übergeben', () => {
      const sr1 = new SearchResult({
        ...mockSearchResults()[0],
        score: 1
      })
      expect(sr1.score).toBe(1)

      const sr2 = new SearchResult({
        ...mockSearchResults()[0],
        score: undefined
      })
      expect(sr2.score).toBe(undefined)
    })
  })
})
