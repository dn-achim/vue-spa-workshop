import Vue from 'vue'
import Vuetify from 'vuetify'
import ProjectStatus from './status.vue'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import { mockProjects } from '@/entities'

Vue.use(Vuetify)

const localVue = createLocalVue()
const project = mockProjects()[0]

describe('>>> Component: ProjectStatus', () => {
  let wrapper: Wrapper<ProjectStatus>

  it('Projekt-Status wird korrekt dargestellt', () => {
    wrapper = mount(ProjectStatus, {
      localVue,
      vuetify: new Vuetify(),
      propsData: {
        project: {
          ...project,
          status: 'aktiv'
        },
        compressed: false
      }
    })
    expect(wrapper.find('.mdi').classes()).toContain('mdi-alpha-a-box')
    expect(wrapper.find('.mdi').classes()).toContain('state-active--text')
  })
})
