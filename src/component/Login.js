import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.warn(email, password);

    let result = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct Name");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={handleChangeEmail}
        className="inputBox"
        placeholder="Enter Email"
      />
      <input
        type="password"
        className="inputBox"
        value={password}
        onChange={handleChangePassword}
        placeholder="Enter password"
      />
      <button className="appButton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
