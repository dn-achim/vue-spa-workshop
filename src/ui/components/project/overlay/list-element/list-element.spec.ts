import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, Wrapper, mount } from '@vue/test-utils'
import ProjectListElement from './list-element.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

const props = {
  content: 'Test-Content',
  icon: 'mdi-help',
  tooltip: 'Test-Tooltip'
}

describe('>>> Component: ProjectListElement', () => {
  let wrapper: Wrapper<ProjectListElement>

  beforeEach(() => {
    wrapper = mount(ProjectListElement, {
      localVue,
      vuetify: new Vuetify(),
      propsData: props
    })
  })

  /* boilerplate test
   it('should render', () => {
   expect(wrapper).toBeDefined()
   })
   */

  it('Das Listen-Element wird korrekt gerendert', () => {
    expect(wrapper.find('.v-list-item__content.caption').text()).toBe(props.content)
    expect(wrapper.find('.v-icon').classes()).toContain(props.icon)
  })
})
