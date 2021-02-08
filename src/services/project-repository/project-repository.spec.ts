import { mockProjects } from '@/entities'
import { ProjectRepository } from '@/services'

describe('>>> ProjectRepository', () => {
  const projectRepository = new ProjectRepository(mockProjects())

  describe('>> getAll', () => {
    it('Gibt alle Projekte zurück', () => {
      expect(projectRepository.getAll()).toEqual(mockProjects())
    })
  })

  describe('>> getOneById', () => {
    it('Gibt ein Projekt auf Basis der id zurück', () => {
      const project = mockProjects()[1]
      const uuid = project.uuid as string
      expect(projectRepository.getOne(uuid)).toEqual(project)
    })

    it('Sollte undefined zurückgeben, wenn id nicht existiert', () => {
      expect(projectRepository.getOne('1')).toBeUndefined()
    })
  })
})
