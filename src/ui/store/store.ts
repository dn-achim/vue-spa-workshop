import Vue from 'vue'
import Vuex from 'vuex'
import { StateInterface } from '@/ui'
import { getters } from '@/ui/store/getters'
import { mutations } from '@/ui/store/mutations'

Vue.use(Vuex)

export const store = new Vuex.Store<StateInterface>({
  state: {
    project: null,
    show: false
  },
  getters,
  mutations
})
