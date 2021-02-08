import { ProjectInterface } from '@/entities'
import { GettersInterfaceMock } from './getters/getters.types'
import { MutationsInterfaceMock } from './mutations/mutations.types'
import { Store } from 'vuex'

export interface StateInterface {
  project: ProjectInterface | null;
  show: boolean;
}

export type StoreType = Store<StateInterface>

export interface StoreInterfaceMock extends StoreType {
  state: StateInterface;
  mutations: MutationsInterfaceMock;
  getters: GettersInterfaceMock;
}
