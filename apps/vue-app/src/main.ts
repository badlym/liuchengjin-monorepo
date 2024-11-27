import Antd from 'ant-design-vue';

import { createApp } from 'vue';
import App from './App.vue';

import '@/style/tailwindcss';

import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Antd);
app.mount('#app');
