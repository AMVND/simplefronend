import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, SettingOutlined, FileTextOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['dashboard']}
      style={{ height: '100vh', width: 200 }}
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="reports" icon={<FileTextOutlined />}>
        <Link to="/reports">Reports</Link>
      </Menu.Item>
    </Menu>
  );
};
export default Sidebar;