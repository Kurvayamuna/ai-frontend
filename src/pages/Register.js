import { useState } from "react";
import axios from "axios";
import "./Register.css";

const API_BASE = "https://ai-backend-10-jcrs.onrender.com";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    // Prevents the browser from refreshing the page on form submit
    e.preventDefault(); 
    
    try {
      await axios.post(`${API_BASE}/api/register`, {
        name,
        email,
        password,
      });
      alert("Registered successfully!");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-page">
      {/* 1. Wrapped inputs in a standard HTML form element */}
      <form className="register-card" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
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
        {/* 2. Changed to type="submit" so pressing Enter triggers submission */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;