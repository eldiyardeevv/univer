import { styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = () => {
    if (password !== email) {
      alert("Passwords do not match");
      return;
    }
    // Add registration logic here, e.g., API call
    nav("/");
  };

  return (
    <DivMain>
      <Cart>
        <h1>Регистрация</h1>
        <input
          type="text"
          placeholder="Имя..."
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Фамилия..."
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль..."
          onChange={(event) => setPassword(event.target.value)}
        />
        
        <button onClick={handleRegister}>Регистрация</button>
      </Cart>
    </DivMain>
  );
};

export default Register;

const DivMain = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

const Cart = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  width: 400,
  padding: 20,
  border: "1px solid #ccc",
  borderRadius: 10,
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  h1: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
    border: "none",
    background: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      background: "#0056b3",
    },
  },
}));
