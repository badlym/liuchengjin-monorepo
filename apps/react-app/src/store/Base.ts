import { Instance, types } from 'mobx-state-tree';

import { CounterStoreType } from '@/store/Counter';

export const Base = types
  .model('Base', {
    text: types.optional(types.string, '这是文字'),
    age: types.optional(types.number, 15),
    age2: types.optional(types.number, 15),
    name: types.optional(types.string, '这是baseStore的名字'),
  })
  .views((self) => ({
    get addAge() {
      return self.age + 1;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      console.log('基础信息的生命周期');
    },
    logInfo() {
      console.log('打印基础信息');
    },
  }));

// export const mixin = (self: CounterStoreType) => {
//   return {
//     actions: {
//       logName() {
//         console.log(self.name);
//         console.log(self.age);
//       },
//     },
//   };
// };

// 定义模型的基本属性
// const BaseModel = types.model({
//   id: types.identifier,
//   name: types.string,
// });
//
// // 定义 mixin 的接口
// interface ExtraActions {
//   doSomething: () => void;
// }

// 定义扩展函数，接受一个泛型 T，T 是 BaseModel 的实例类型
// function withExtraActions<T extends Instance<typeof BaseModel>>(Model: T) {
//   return types.compose(
//     Model,
//     types.model({}).actions((self) => ({
//       doSomething() {
//         console.log('Something done by', self.name);
//       },
//     })),
//   ); // 使用交叉类型确保返回的类型既有 T 的类型也有 ExtraActions 的类型
// }
//
// // 创建新的模型类型，应用 mixin
// const EnhancedModel = withExtraActions(BaseModel);
//
// // 使用 EnhancedModel
// const instance = EnhancedModel.create({ id: '1', name: 'John' });
// instance.doSomething(); // 现在 TypeScript 知道 doSomething() 是有效的

const Square = types
  .model('Square', {
    width: types.number,
  })
  .actions((self) => {
    return {
      afterCreate() {
        console.log('父模型');
      },
      info() {
        console.log(' 父模型info');
      },
    };
  })
  .views((self) => ({
    // note: this is not a getter! this is just a function that is evaluated
    surface() {
      return self.width * self.width;
    },
  }));

// create a new type, based on Square
const Box = Square.named('Box')

  .actions((self) => {
    return {
      afterCreate() {
        console.log('子模型');
      },
      // info() {
      //   console.log(' 子模型info');
      // },
    };
  })

  .views((self) => {
    // save the base implementation of surface, again, this is a function.
    // if it was a getter, the getter would be evaluated only once here
    // instead of being able to evaluate dynamically at time-of-use
    const superSurface = self.surface;

    return {
      // super contrived override example!
      surface() {
        return superSurface() * 1;
      },
      volume() {
        return self.surface() * self.width;
      },
    };
  });

// no inheritance, but, union types and code reuse
const Shape = types.union(Box, Square);

const instance = Shape.create({ width: 4 });
console.log(instance.width);
console.log(instance.info());
// console.log(instance.surface()) // calls Box.surface()
// console.log(instance.volume()) // calls Box.volume()
