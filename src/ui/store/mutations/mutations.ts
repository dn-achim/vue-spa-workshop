import { MutationsInterface, MutationTypes } from './mutations.types'
import { ProjectInterface } from '@/entities'
import { StateInterface } from '@/ui'

export const mutations: MutationsInterface = {
  [MutationTypes.PROJECT] (state: StateInterface, payload: ProjectInterface) {
    state.project = payload
  },

  [MutationTypes.SHOW] (state: StateInterface, payload: boolean) {
    state.show = payload
  }
}
