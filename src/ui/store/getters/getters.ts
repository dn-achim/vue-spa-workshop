import { ProjectInterface } from '@/entities'
import { GettersInterface, GetterTypes } from '@/ui/store/getters/getters.types'
import { StateInterface } from '../store.types'

export const getters: GettersInterface = {
  [GetterTypes.PROJECT] (state: StateInterface): ProjectInterface | null {
    return state.project
  },

  [GetterTypes.SHOW] (state: StateInterface): boolean {
    return state.show
  }
}
