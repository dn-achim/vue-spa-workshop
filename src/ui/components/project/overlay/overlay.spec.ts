import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, Wrapper, mount } from '@vue/test-utils'
import { mockProjects } from '@/entities'
import { routes, mockState } from '@/ui'
import { GetterTypes } from '@/ui/store/getters'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ProjectOverlay from './overlay.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

// v-dialog issue
document.body.setAttribute('data-app', 'true')

const localVue = createLocalVue()

const project = mockProjects()[0]
const state = {
  ...mockState(),
  project: project,
  show: true
}

const getters = {
  [GetterTypes.PROJECT]: () => state.project,
  [GetterTypes.SHOW]: () => state.show
}

describe('>>> Component: ProjectList', () => {
  let wrapper: Wrapper<ProjectOverlay>

  beforeEach(() => {
    wrapper = mount(ProjectOverlay, {
      localVue,
      store: new Vuex.Store({
        getters
      }),
      vuetify: new Vuetify(),
      router: new VueRouter({ routes })
    })
  })

  /* boilerplate test
   it('should render', () => {
   expect(wrapper).toBeDefined()
   })
   */

  it('Projekt wird korrekt gerendert', () => {
    expect(wrapper.find('.v-card__title').text()).toBe(state.project?.titel)
  })
})
