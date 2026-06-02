import React from "react";
import illustration from "../images/19201080.jpg";
import "./Home.css";

function Home() {

  return (

    <>
    
      {/* HERO SECTION */}
      <section className="home">

        {/* Background Blur */}
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        {/* LEFT CONTENT */}
        <div className="content">

          <span className="tag">
            AI Powered Assistant
          </span>

          <h1>
            Smart AI Chatbot <br />
            For Modern Conversations
          </h1>

          <p>
            Experience intelligent conversations, instant answers,
            and productivity tools powered by next-generation AI.
          </p>

          {/* BUTTONS */}
          <div className="buttons">

            <button className="primary">
              Get Started
            </button>

            <button className="secondary">
              Learn More
            </button>

          </div>

          {/* STATS */}
          <div className="stats">

            <div className="stat-card">
              <h2>24/7</h2>
              <span>AI Support</span>
            </div>

            <div className="stat-card">
              <h2>10K+</h2>
              <span>Users</span>
            </div>

            <div className="stat-card">
              <h2>99%</h2>
              <span>Accuracy</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="image-section">

          <div className="image-card">

            <img
              src={illustration}
              alt="AI Chatbot"
            />

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="features">

        <div className="feature-card">

          <div className="icon blue">
            ⚡
          </div>

          <div>
            <h3>Instant Answers</h3>

            <p>
              Get quick and accurate responses in real-time.
            </p>
          </div>

        </div>

        <div className="feature-card">

          <div className="icon purple">
            🔒
          </div>

          <div>
            <h3>Secure & Reliable</h3>

            <p>
              Your data is protected with top-level security.
            </p>
          </div>

        </div>

        <div className="feature-card">

          <div className="icon green">
            ⏰
          </div>

          <div>
            <h3>24/7 Availability</h3>

            <p>
              AI assistant available anytime, anywhere.
            </p>
          </div>

        </div>

        <div className="feature-card">

          <div className="icon orange">
            🚀
          </div>

          <div>
            <h3>Boost Productivity</h3>

            <p>
              Streamline tasks and increase your efficiency.
            </p>
          </div>

        </div>

      </section>

    </>

  );
}

export default Home;