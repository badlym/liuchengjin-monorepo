import type { App } from 'vue';
// 引入 form-create 组件库
import formCreate from '@form-create/ant-design-vue';
export const setupFormCreate = (app: App) => {
  app.use(formCreate);
};
