import { flow, types } from 'mobx-state-tree';

/**
 *
 * @type {IModelType<ModelPropertiesDeclarationToProperties<{asyncCount: ISimpleType<unknown>, syncCount: ISimpleType<unknown>}>, {setAsyncIncrement: () => Promise<FlowReturn<void>>, setSyncIncrement(): void} & {readonly totalCount: any}, _NotCustomized, _NotCustomized>}
 */
export const CounterStore = types
  .model('CounterStore', {
    syncCount: types.optional(types.number, 0),
    asyncCount: types.optional(types.number, 0),
  })

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
  }))
  .views((self) => ({
    get totalCount() {
      return self.syncCount + self.asyncCount;
    },
  }));
