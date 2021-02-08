import { mockProjects, ProjectInterface } from '@/entities'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, Wrapper, shallowMount } from '@vue/test-utils'
import ProjectStatusElement from './status-element.vue'
import ProjectStatus from '../../status/status.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
const project: ProjectInterface = mockProjects()[0]

describe('>>> Component: ProjectStatusElement', () => {
  let wrapper: Wrapper<ProjectStatusElement>

  beforeEach(() => {
    wrapper = shallowMount(ProjectStatusElement, {
      localVue,
      vuetify: new Vuetify(),
      propsData: {
        project
      }
    })
  })

  /* boilerplate test
   it('should render', () => {
   expect(wrapper).toBeDefined()
   })
   */

  it('Das Status-Element beinhaltet den Projekt-Status', () => {
    expect(wrapper.findComponent<ProjectStatus>(ProjectStatus).exists()).toBe(true)
  })
})
