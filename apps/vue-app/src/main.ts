import { setupFormCreate } from '@/components/formCreate';

import { setupVxeTable } from '@/components/vxe-table';
import Antd from 'ant-design-vue';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

import '@/style/tailwindcss/index.css';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App);
app.use(Antd);
app.use(router);
setupVxeTable(app); // 注册 vxe-table
setupFormCreate(app); // 注册 form-create
app.mount('#app');
