import { mockState, mockStore } from '../store.mock'
import { GetterTypes } from './getters.types'
import { getters } from './getters'

describe('>>> Getters', () => {
  const state = mockState()
  const store = mockStore()

  describe(`>> ${GetterTypes.PROJECT}`, () => {
    it('Sollte das richtige "project" aus dem State zurückgeben', () => {
      expect(getters[GetterTypes.PROJECT].bind(store)(state)).toStrictEqual(state.project)
    })
  })

  describe(`>> ${GetterTypes.SHOW}`, () => {
    it('Sollte "show" korrekt aus dem State zurückgeben', () => {
      expect(getters[GetterTypes.SHOW].bind(store)(state)).toStrictEqual(state.show)
    })
  })
})
