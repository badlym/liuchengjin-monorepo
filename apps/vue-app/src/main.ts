import { createApp } from 'vue';

import './style.css';
import App from './App.vue';

import Antd from 'ant-design-vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Antd);
app.mount('#app');
