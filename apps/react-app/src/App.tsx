import { StyleProvider } from '@ant-design/cssinjs';
import { App as AntdApp, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN'

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '@/routers';
// import { Provider, rootStore } from '@/store';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/">
        <ConfigProvider locale={zhCN}>


          <StyleProvider>
            <AntdApp>
              <Router />

            </AntdApp>
          </StyleProvider>
        </ConfigProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
