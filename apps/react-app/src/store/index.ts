import { Instance, onSnapshot, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';

import { CounterStore } from './Counter';

const RootModel = types.model({
  // counterStore: types.optional(CounterStore, {}),
  counterStore: types.optional(CounterStore, {}),
  // childStore: types.optional(childModel, {}),
  // childStore2: types.optional(child2Model, {}),
});

// .actions((self) => ({
//   afterCreate() {},
// }));

const initialState = RootModel.create();

// const data = localStorage.getItem('rootState')
// if (data) {
//   const json = JSON.parse(data)
//   if (RootModel.is(json)) {
//     initialState = RootModel.create(json)
//   }
// }

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  // eslint-disable-next-line no-console
  console.log('Snapshot:', snapshot);
  // localStorage.setItem('rootState', JSON.stringify(snapshot))
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const { Provider } = RootStoreContext;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
