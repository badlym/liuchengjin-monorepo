import { flow, types } from 'mobx-state-tree'

export const CounterStore = types
  .model('CounterStore', {
    syncCount: types.number,
    asyncCount: types.number,
  })

  .actions((self) => ({
    setAsyncIncrement: flow(function* () {
      yield new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      // eslint-disable-next-line no-plusplus
      self.asyncCount++
    }),
    setSyncIncrement() {
      // eslint-disable-next-line no-plusplus
      self.syncCount++
    },
  }))
  .views((self) => ({
    get totalCount() {
      return self.syncCount + self.asyncCount
    },
  }))
