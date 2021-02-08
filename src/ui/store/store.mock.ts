import { StateInterface, StoreInterfaceMock } from './store.types'
import { mockMutations } from './mutations'
import { mockGetters } from './getters'

export const mockState = (): StateInterface => ({
  project: null,
  show: false
})

export const mockStore = (): StoreInterfaceMock => ({
  state: mockState(),
  mutations: mockMutations(),
  getters: mockGetters(),
  replaceState: jest.fn(),
  dispatch: jest.fn(),
  commit: jest.fn(),
  subscribe: jest.fn(),
  subscribeAction: jest.fn(),
  watch: jest.fn(),
  registerModule: jest.fn(),
  unregisterModule: jest.fn(),
  hasModule: jest.fn(),
  hotUpdate: jest.fn()
})
