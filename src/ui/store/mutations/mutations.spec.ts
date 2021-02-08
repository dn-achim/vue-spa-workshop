import { mockState, mockStore } from '@/ui'
import { mockProjects } from '@/entities'
import { MutationTypes } from './mutations.types'
import { mutations } from './mutations'

describe('>>> Mutations', () => {
  describe(`>> ${MutationTypes.PROJECT}`, () => {
    it('Sollte "project" in dem Store speichern', () => {
      const state = mockState()
      const payload = mockProjects()[0]
      const expected = {
        ...state,
        project: payload
      }

      mutations[MutationTypes.PROJECT].bind(mockStore())(state, payload)
      expect(state).toEqual(expected)
    })
  })

  describe(`>> ${MutationTypes.SHOW}`, () => {
    it('Sollte "show" in dem Store speichern', () => {
      const state = mockState()
      const payload = true
      const expected = {
        ...state,
        show: payload
      }

      mutations[MutationTypes.SHOW].bind(mockStore())(state, payload)
      expect(state).toEqual(expected)
    })
  })
})
