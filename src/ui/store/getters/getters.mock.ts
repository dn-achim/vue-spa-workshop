import { GettersInterfaceMock, GetterTypes } from '@/ui/store/getters/getters.types'

export const mockGetters = (): GettersInterfaceMock => ({
  [GetterTypes.PROJECT]: jest.fn(),
  [GetterTypes.SHOW]: jest.fn()
})
