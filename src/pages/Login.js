import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;