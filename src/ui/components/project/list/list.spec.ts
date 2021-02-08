import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, Wrapper, mount } from '@vue/test-utils'
import { mockProjects } from '@/entities'
import { routes } from '@/ui'
import VueRouter from 'vue-router'
import ProjectList from './list.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const projects = mockProjects()

describe('>>> Component: ProjectList', () => {
  let wrapper: Wrapper<ProjectList>

  beforeEach(() => {
    wrapper = mount(ProjectList, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter({ routes }),
      propsData: { projects }
    })
  })

  /* boilerplate test
   it('should render', () => {
   expect(wrapper).toBeDefined()
   })
   */

  it('Projektliste sollte in Karte korrekt gerendert werden', () => {
    expect(wrapper.findAll('.col-12')).toHaveLength(projects.length)
  })
})
