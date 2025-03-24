import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Alert } from "antd";
import "antd/dist/reset.css";
import './style.css';

const Login = ({ onLogin }) => {
    const [loginData, setLoginData] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setLoginData(data.results[0].login);
        })
        .catch(() => setError("Không thể tải dữ liệu đăng nhập"));
    }, []);
  
    const onFinish = (values) => {
      if (!loginData) {
        setError("Dữ liệu chưa sẵn sàng, vui lòng thử lại!");
        return;
      }
  
      if (values.username === loginData.username && values.password === loginData.password) {
        onLogin();
      } else {
        setError("Sai tài khoản hoặc mật khẩu!");
        setTimeout(() => setError(""), 5000); 
      }
    };

    return (
        <>
            {error && (
                <div className="floating-alert">
                    <Alert
                        message="Lỗi!"
                        description={error}
                        type="error"
                        showIcon
                        style={{ padding: "5px 10px", fontSize: "12px", width: "300px" }}
                    />
                </div>
            )}
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
        </>
    );
};

export default Login;