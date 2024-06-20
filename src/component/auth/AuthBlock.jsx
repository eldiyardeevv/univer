import { styled } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const AuthBlock = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const handleClick = () => {
    if (login !== "edu@gmail.com" || password !== "12345678") {
      return alert("Логик и Пароль ошибка!!!");
    } else {
      nav("/layout");
    }
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div style={{ display: "flex", marginTop: 170, gap: 250 }}>
      <Photo></Photo>
      <PhotoTwo></PhotoTwo>
      <DivMain>
        <Cart>
          <h1>Авторизация</h1>
          <input
            type="text"
            placeholder="Логин..."
            onChange={(event) => setLogin(event.target.value)}
          />
          <PasswordWrapper>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль..."
              onChange={(event) => setPassword(event.target.value)}
            />
            <EyeIcon onClick={toggleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </EyeIcon>
          </PasswordWrapper>
          <button onClick={handleClick}>Вход</button>
          <Link to="/register" style={{ marginTop: -20 }}>
            Регистрация
          </Link>
        </Cart>
      </DivMain>
    </div>
  );
};

export default AuthBlock;
const Photo = styled("div")(() => ({
  background: `url('/img/logo.svg') no-repeat center center/cover`,
  height: "500px",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
}));
const PhotoTwo = styled("div")(() => ({
  background: `url('/img/image.jpg') no-repeat center center/cover`,
  height: "500px",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  borderRadius: 300,
}));
const DivMain = styled("div")(() => ({
  position: "absolute",
  width: 400,
  height: 400,
  left: 750,
  top: 220,
  borderRadius: 10,
  border: "3px solid",
}));
const Cart = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 50,
  marginTop: 50,
  h1: {
    fontSize: 40,
  },
  input: {
    width: 250,
    height: 30,
    borderRadius: 6,
    border: "1px solid #234545",
    padding: "0 0 0 20px",
  },
  button: {
    padding: "5px 50px",
    border: "1px solid #234545",
    borderRadius: 5,
  },
}));
const PasswordWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: 270,
}));

const EyeIcon = styled("div")(() => ({
  position: "absolute",
  right: 10,
  cursor: "pointer",
}));
