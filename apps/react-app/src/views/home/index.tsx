import type { MenuProps } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import React, { useMemo, useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState('front-end');
  const navigate = useNavigate();
  const items: MenuItem[] = useMemo(() => {
    return [
      getItem('前端演示', '/front-end', <PieChartOutlined />),
      getItem('用户', '/user', <DesktopOutlined />),
      getItem('工单', '/order', <FileOutlined />),
      getItem('immer', '/immer', <FileOutlined />),
      // getItem('three', '/three', <FileOutlined />),
      // getItem('konva', '/konva', <FileOutlined />),
      // // getItem('富文本', 'tinymce', <FileOutlined />),
    ];
  }, [menuKey]);
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="tw-h-[50px]" />
        <Menu
          theme="dark"
          onClick={handleMenuClick}
          mode="inline"
          defaultSelectedKeys={['/front-end']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '20px 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
