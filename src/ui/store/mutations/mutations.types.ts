import { ProjectInterface } from '@/entities'
import { StateInterface } from '@/ui'
import { MutationTree, Store } from 'vuex'

export enum MutationTypes {
  PROJECT = 'SET_PROJECT',
  SHOW = 'SET_SHOW'
}

export interface MutationsInterface extends MutationTree<StateInterface> {
  [MutationTypes.PROJECT] (this: Store<StateInterface>, state: StateInterface, payload: ProjectInterface): void;

  [MutationTypes.SHOW] (this: Store<StateInterface>, state: StateInterface, payload: boolean): void;
}

export interface MutationsInterfaceMock extends MutationsInterface {
  [MutationTypes.PROJECT]: jest.Mock<void>;

  [MutationTypes.SHOW]: jest.Mock<void>;
}
