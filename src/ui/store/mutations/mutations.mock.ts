import { MutationsInterfaceMock, MutationTypes } from './mutations.types'
import { mockProjects } from '@/entities'

export const mockMutations = (): MutationsInterfaceMock => ({
  [MutationTypes.PROJECT]: jest.fn(),
  [MutationTypes.SHOW]: jest.fn()
})

export const mockCreateCommentMutationPayload = {
  project: mockProjects()[0],
  show: false
}
