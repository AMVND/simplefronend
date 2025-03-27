import { Layout } from 'antd';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;


const MainLayout = () => (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider width={200}>
      <Sidebar />
    </Sider>
    <Layout style={{ padding: '16px' }}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;