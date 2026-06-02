import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    await axios.post(
      "http://localhost:3000/api/register",
      {
        name,
        email,
        password,
      }
    );

    alert("Registered");
  };

  return (

    <div className="register-page">

      <div className="register-card">

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;