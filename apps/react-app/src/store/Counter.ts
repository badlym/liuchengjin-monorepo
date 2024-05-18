import base from '@liuchengjin/eslint-config/src/base';
import { flow, types, Instance } from 'mobx-state-tree';

import { Base } from '@/store/Base';

const generate = types.model('generate', {
  key: types.identifier,
  name: types.string,
});

export const CounterStore = Base.named('CounterStore')
  .props({
    syncCount: types.optional(types.number, 0),
    asyncCount: types.optional(types.number, 0),
    generateMap: types.map(generate),
    name: types.optional(types.string, '这是conterStore的名字'),
    // age: types.optional(types.number, 18),
  })
  .actions((self) => ({
    afterCreate() {
      debugger;
      console.log('数字模型的生命周期');
    },
    logInfo() {
      console.log('counter', '打印数字模型');
    },
  }))

  // .extend(mixin)

  .actions((self) => ({
    setAsyncIncrement: flow(function* () {
      yield new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      // eslint-disable-next-line no-plusplus
      self.asyncCount++;
    }),
    setSyncIncrement() {
      // eslint-disable-next-line no-plusplus
      self.syncCount++;
    },
    getMap() {
      console.log(self.generateMap);
    },
  }))
  .views((self) => ({
    get totalCount() {
      return self.syncCount + self.asyncCount;
    },
    afterCreate() {},
  }));
export const bar = types
  .model('bar', {
    inner: types.optional(types.string, '这是文字'),
    name: types.optional(types.string, '这是barStore的名字'),
  })
  .actions((self) => ({
    logInfo() {
      console.log(self.name);
    },
  }));

// export const childModel = types.compose(CounterStore, bar);
// export const child2Model = types.union(CounterStore, bar);

export interface CounterStoreType extends Instance<typeof CounterStore> {}
