import { StateInterface } from '@/ui'
import { ProjectInterface } from '@/entities'
import { GetterTree, Store } from 'vuex'

export enum GetterTypes {
  PROJECT = 'GET_PROJECT',
  SHOW = 'GET_SHOW'
}

export interface GettersInterface extends GetterTree<StateInterface, StateInterface> {
  [GetterTypes.PROJECT] (this: Store<StateInterface>, state: StateInterface): ProjectInterface | null;

  [GetterTypes.SHOW] (this: Store<StateInterface>, state: StateInterface): boolean;
}

export interface GettersInterfaceMock {
  [GetterTypes.PROJECT]: jest.Mock<ProjectInterface>;
  [GetterTypes.SHOW]: jest.Mock<boolean>;
}
