import { ProjectRepository, provider } from '@/services'

jest.mock('../project-repository/project-repository')

describe('>>> Provider', () => {
  it('Sollte den Service ProjectRepository instantiiert haben', () => {
    provider()
    expect(ProjectRepository.prototype.constructor).toBeCalled()
  })
})
