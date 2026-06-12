import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import illustration from "../images/ai-chatbot.jpg";
import "./Dashboard.css";

const API_BASE = "https://ai-backend-10-jcrs.onrender.com";

function Dashboard() {
  // USERS
  const [users, setUsers] = useState([]);

  // CHAT
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // Auto-scroll ref for chat
  const messagesEndRef = useRef(null);

  // TOKEN
  const token = localStorage.getItem("token");

  // =========================
  // FETCH USERS
  // =========================
  const fetchUsers = useCallback(async () => {
    if (!token) return; // Prevent calling if token doesn't exist
    try {
      const res = await axios.get(`${API_BASE}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.log(error.response?.data);
      if (error.response?.status === 401) {
        alert("Please login again");
      }
    }
  }, [token]);

  // ✅ Fixed ESLint Warning: fetchUsers added to dependency array
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Auto-scroll chat window when a new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  // =========================
  // DELETE USER
  // =========================
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`${API_BASE}/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUsers();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // =========================
  // AI CHAT
  // =========================
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMsg = message;
    const newChat = [...chat, { sender: "user", text: userMsg }];

    setChat(newChat);
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        `${API_BASE}/api/chat`,
        { message: userMsg },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setChat([
        ...newChat,
        { sender: "bot", text: res.data.reply },
      ]);
    } catch (error) {
      console.log(error.response?.data);
      setChat([
        ...newChat,
        { sender: "bot", text: "Error connecting to AI" },
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
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            disabled={loading} // Disable input while waiting for AI
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} disabled={loading}>
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
