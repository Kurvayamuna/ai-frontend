import React, { useEffect, useState, useCallback, } from "react";
import axios from "axios";
import illustration from "../images/ai-chatbot.jpg";
import "./Dashboard.css";

// 🌐 YOUR LIVE DEPLOYMENT BACKEND URL
const API_BASE = "https://ai-backend-10-jcrs.onrender.com";

function Dashboard() {

  // USERS
  const [users, setUsers] = useState([]);

  // CHAT
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // TOKEN
  const token = localStorage.getItem("token");

  // =========================
  // FETCH USERS
  // =========================
  const fetchUsers = useCallback(async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/users`, // <-- Updated to Live URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error.response?.data);
      if (error.response?.status === 401) {
        alert("Please login again");
      }
    }
  }, [token]);

 useEffect(() => {
  fetchUsers();
}, []); // <-- ESLint is complaining that 'fetchUsers' isn't inside this array

  // =========================
  // DELETE USER
  // =========================
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `${API_BASE}/api/users/${id}`, // <-- Updated to Live URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchUsers();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // =========================
  // AI CHAT
  // =========================
  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    const newChat = [
      ...chat,
      {
        sender: "user",
        text: message,
      },
    ];

    setChat(newChat);
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${API_BASE}/api/chat`, // <-- Updated to Live URL
        {
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Backend returns: { reply: "AI text" }
      setChat([
        ...newChat,
        {
          sender: "bot",
          text: res.data.reply,
        },
      ]);
    } catch (error) {
      console.log(error.response?.data);
      setChat([
        ...newChat,
        {
          sender: "bot",
          text: "Error connecting to AI",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="main">
      {/* LEFT SECTION */}
      <div className="left">
        <h1>Welcome to AI Chatbot</h1>
        <p>Ask anything and manage users easily.</p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>

        {/* USERS SECTION */}
        <div className="users-section">
          {users.map((user) => (
            <div key={user._id} className="user-card">
              <p>{user.name}</p>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </div>
          ))}
        </div>

        <img src={illustration} alt="AI Chatbot" className="hero-img" />
      </div>

      {/* CHAT SECTION */}
      <div className="chatbox">
        <div className="messages">
          {chat.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {loading && <div className="typing">AI is typing...</div>}
        </div>

        {/* INPUT */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
