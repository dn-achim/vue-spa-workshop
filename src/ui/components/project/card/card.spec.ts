import Vue from 'vue'
import Vuetify from 'vuetify'
import ProjectCard from './card.vue'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import { mockProjects } from '@/entities'
import { routes } from '@/ui'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const project = mockProjects()[0]

describe('>>> Component: ProjectCard', () => {
  let wrapper: Wrapper<ProjectCard>

  beforeEach(() => {
    wrapper = mount(ProjectCard, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter({ routes }),
      propsData: { project }
    })
  })

  /* boilerplate test
   it('should render', () => {
   expect(wrapper).toBeDefined()
   })
   */

  it('Project sollte in Karte korrekt gerendert werden', () => {
    expect(wrapper.find('.v-card__title').text()).toBe(project.titel)
    expect(wrapper.find('.v-card__text > p').text()).toBe(project.beschreibung)
    expect(wrapper.findAll('.v-card__text > ul > li')).toHaveLength(project.ansprechpartner.length)
  })
})
