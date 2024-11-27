import { router } from '@/routers';
import { StyleProvider } from '@ant-design/cssinjs';
import { App as AntdApp, ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';

import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    // <React.StrictMode>

    <ConfigProvider locale={zhCN}>
      <StyleProvider>
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
    // </React.StrictMode>
  );
};

export default App;
