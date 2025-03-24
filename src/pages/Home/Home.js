import React from "react";
import { Card, Avatar, Button } from "antd";

const jsonData = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Gabrielle", last: "Andersen" },
      location: {
        street: { number: 6699, name: "Victoria Ave" },
        city: "Elgin",
        state: "Saskatchewan",
        country: "Canada",
        postcode: "T7J 3K1",
      },
      email: "gabrielle.andersen@example.com",
      dob: { date: "1947-12-09T01:06:57.171Z", age: 77 },
      phone: "S38 G37-8994",
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
      },
      nat: "CA",
    },
  ],
};

const Home = ({ onLogout }) => {
    const user = jsonData.results[0];
  
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