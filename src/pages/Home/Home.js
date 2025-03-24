import React, {useState, useEffect} from "react";
import { Card, Avatar,Spin, Button } from "antd";

const Home = ({onLogout}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("/data.json")
          .then((response) => {
            if (!response.ok) throw new Error("Không thể tải dữ liệu");
            return response.json();
          })
          .then((data) => {
            setUser(data.results[0]);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
      if (!user) return null;
    return (
      <Card title="Thông tin người dùng" style={{ width: 400, margin: "50px auto" }}>
        <Avatar src={user.picture.large} size={100} style={{ marginBottom: 20 }} />
        <p><b>Họ tên:</b> {user.name.title} {user.name.first} {user.name.last}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Tuổi:</b> {user.dob.age}</p>
        <p><b>Điện thoại:</b> {user.phone}</p>
        <p><b>Địa chỉ:</b> {user.location.street.number}, {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}</p>
        <Button type="primary" danger onClick={onLogout} style={{ marginTop: 20 }}>
          Đăng xuất
        </Button>
      </Card>
    );
  };
  
export default Home;