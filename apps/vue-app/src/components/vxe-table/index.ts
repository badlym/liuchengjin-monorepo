import type { App } from 'vue';
import VxeUI from 'vxe-pc-ui';
import VxeUITable from 'vxe-table';
import 'vxe-pc-ui/lib/style.css';
import 'vxe-table/lib/style.css';

export const setupVxeTable = (app: App) => {
  app.use(VxeUI);
  app.use(VxeUITable);
};
