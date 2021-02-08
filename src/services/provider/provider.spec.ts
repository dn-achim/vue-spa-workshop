import { ProjectRepository, ProjectSearch, provider } from '@/services'

jest.mock('../project-repository/project-repository')
jest.mock('../project-search/project-search')

describe('>>> Provider', () => {
  it('Sollte den Service ProjectRepository instantiiert haben', () => {
    provider()
    expect(ProjectRepository.prototype.constructor).toBeCalled()
  })

  it('Sollte den Service ProjectSearch instantiiert haben', () => {
    provider()
    expect(ProjectSearch.prototype.constructor).toBeCalled()
  })
})
