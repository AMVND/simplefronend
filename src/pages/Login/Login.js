import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Form, Card, Typography } from 'antd';

const Login = () => {
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const success = await login(values.username, values.password);
    if (success) navigate('/');
    else setError('Sai tên đăng nhập hoặc mật khẩu!');
  };

  return (
    <Card title="Đăng nhập" style={{ width: 300, margin: '100px auto' }}>
      <Form onFinish={handleLogin}>
        <Form.Item name="username" rules={[{ required: true, message: 'Nhập username!' }]}> 
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Nhập password!' }]}> 
          <Input.Password placeholder="Password" />
        </Form.Item>
        {error && <Typography.Text type="danger">{error}</Typography.Text>}
        <Button type="primary" htmlType="submit" block>Đăng nhập</Button>
      </Form>
    </Card>
  );
};
export default Login;