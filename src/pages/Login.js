import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// 🌐 YOUR LIVE DEPLOYMENT BACKEND URL
const API_BASE = "https://ai-backend-10-jcrs.onrender.com";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // Prevent standard browser page reload on form submit
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/api/login`, { // <-- Updated to Live URL
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">
      {/* Wrapped inputs in a form tag to enable hitting 'Enter' to submit */}
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Set type to submit */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;