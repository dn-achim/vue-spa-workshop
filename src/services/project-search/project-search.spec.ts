import { ProjectSearch, ProjectRepository } from '@/services'
import { mockProjects } from '@/entities'

describe('>>> ProjectSearch', () => {
  const projectSearch = new ProjectSearch(new ProjectRepository(mockProjects()))

  describe('>> filter', () => {
    it('Ohne "phrase" werden alle Projekte returniert', () => {
      expect(projectSearch.filter()).toHaveLength(mockProjects().length)
    })

    it('Filter mit "Banane" liefert 2 Ergebnisse', () => {
      expect(projectSearch.filter('Banane')).toHaveLength(2)
    })

    it('Filter mit "Apfel" liefert 1 Ergebnis', () => {
      expect(projectSearch.filter('Apfel')).toHaveLength(1)
    })
  })

  describe('>> search', () => {
    it('Search mit "Banane" liefert 2 Ergebnisse', () => {
      expect(projectSearch.search('Banane')).toHaveLength(2)
    })

    it('Search mit "Apfel" liefert 1 Ergebnis', () => {
      expect(projectSearch.search('Apfel')).toHaveLength(1)
    })
  })

  describe('>> findOne', () => {
    it('FindOne mit spezifischer UUID liefert das richtige Ergebnis', () => {
      const p = projectSearch.findOne('a-b-c-d-1')
      expect(p?.item.uuid).toBe('a-b-c-d-1')
    })

    it('FindOne mit ungültiger UUID liefert undefined', () => {
      const p = projectSearch.findOne('does-not-exist')
      expect(p).toBeUndefined()
    })
  })
})
