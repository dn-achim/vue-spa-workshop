import Vue from 'vue'
import Vuetify from 'vuetify'
import ProjectDetailView from './detail.vue'
import { ProjectRepositoryMixinMock } from '@/ui/mixins'
import { createLocalVue, Wrapper, mount } from '@vue/test-utils'
import { mockProjects } from '@/entities'

Vue.use(Vuetify)

const localVue = createLocalVue()
const project = mockProjects()[0]

const route = {
  path: '/some/path'
}
const router = {
  push: jest.fn()
}

const factory = (uuid: string|null = null): Wrapper<ProjectDetailView> => {
  return mount(ProjectDetailView, {
    localVue,
    vuetify: new Vuetify(),
    mixins: [
      ProjectRepositoryMixinMock
    ],
    propsData: {
      uuid: uuid
    },
    mocks: {
      $route: route,
      $router: router
    }
  })
}

describe('>>> View: ProjectDetail', () => {
  it('Projekt-Detailseite soll korrekt gerendert werden', () => {
    const wrapper: Wrapper<ProjectDetailView> = factory(project.uuid)
    expect(wrapper.find('.v-card__title').text()).toBe(project.titel)
    expect(wrapper.find('.v-card__text.body-1').text()).toBe(project.beschreibung)
  })

  it('Ohne uuid Prop soll auf die Fehler-Seite umgeleitet werden', async () => {
    const wrapper: Wrapper<ProjectDetailView> = factory('not-exist')
    expect(wrapper).toBeTruthy()
    expect(router.push).toHaveBeenCalledTimes(1)
  })
})
