import React from "react";
import { Form, Input, Button, Card} from "antd";
import "antd/dist/reset.css";

const Login = ({ onLogin }) => {

    const userData = {
        username: "admin",
        password: "123456",
      };

    const onFinish = (values) => {
      if (values.username === userData.username && values.password === userData.password) {
        onLogin();
      } else {
        alert("Sai thông tin đăng nhập");
      }
    };
  
    return (
      <Card title="Đăng nhập" style={{ width: 300, margin: "100px auto" }}>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Nhập tài khoản!" }]}>
            <Input placeholder="Tài khoản" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Nhập mật khẩu!" }]}>
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  };
  
export default Login;