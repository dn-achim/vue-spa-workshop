import { Project, mockProjects } from '@/entities'

describe('>>> Project', () => {
  describe('>> Constructor', () => {
    it('"id" soll nur instantiiert sein, wenn als Parameter übergeben', () => {
      const p1 = new Project({
        ...mockProjects()[0],
        uuid: 'a-b-c-d'
      })
      expect(p1.uuid).toBe('a-b-c-d')

      const p2 = new Project({
        ...mockProjects()[0],
        uuid: undefined
      })
      expect(p2.uuid).toBe(undefined)
    })
  })
})
