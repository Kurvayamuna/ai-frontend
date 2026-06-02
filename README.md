AI Chatbot Website Documentation
Project Overview
The AI Chatbot Website is a full-stack MERN application developed using React.js, Node.js, Express.js, and MongoDB.
The application provides secure user authentication, dashboard management, and AI chatbot interaction.
Features
User Registration
User Login Authentication
JWT Token Authorization
Protected Dashboard
Fetch Users
Delete Users
AI Chatbot Integration
Dark & Light Mode
Responsive UI Design

Technologies Used
Technology
Purpose
React.js
Frontend UI
Node.js
Backend Runtime
Express.js
REST API Server
MongoDB
Database
Mongoose
Database Modeling
Axios
API Requests
JWT
Authentication
bcryptjs
Password Encryption
CSS
Styling


Project Structure
project/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── ProtectedRoute.js
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── images/
│   │   ├── App.js
│   │   └── App.css
│   │
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json


Frontend Setup
Install Frontend Packages
npm install

Start Frontend Server
npm start

Frontend URL
http://localhost:3001


Backend Setup
Install Backend Packages
npm install express mongoose cors dotenv jsonwebtoken bcryptjs

Start Backend Server
node server.js

Backend URL
http://localhost:3000


Environment Variables
Create a .env file inside the server folder.
MONGO_URI=mongodb+srv://yamunalinux12_db_user:yamuna12@cluster0.s6caphd.mongodb.net/


JWT_SECRET=mysecretkey


OPENROUTER_API_KEY=sk-or-v1-db872300a8b2a80d78d39dfbfaac6de4e19b315bc6851529cacc61b4ff97171


API Endpoints
1. Register User
Endpoint
POST /api/register

Request Body
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}


2. Login User
Endpoint
POST /api/login

Request Body
{
  "email": "john@gmail.com",
  "password": "123456"
}

Response
{
  "token": "jwt-token"
}


3. Get Users
Endpoint
GET /api/users

Headers
Authorization: Bearer token


4. Delete User
Endpoint
DELETE /api/users/:id


5. AI Chat API
Endpoint
POST /api/chat

Request Body
{
  "message": "Hello AI"
}

Response
{
  "reply": "Hello User"
}


Authentication Flow
Step-by-Step Process
User registers an account
User logs into the application
Backend generates JWT token
Token stored in localStorage
Protected routes verify token
API requests include Authorization headers
Example
headers: {
  Authorization: `Bearer ${token}`,
}


Frontend Pages


Home Page
Features
Responsive Navbar
Hero Section
AI Illustration
Call-to-Action Buttons
Dark & Light Mode Toggle
Register Page
Features
Name Input
Email Input
Password Input
Form Validation
Register Button

Login Page
Features
Email Input
Password Input
JWT Authentication
Login Button

Dashboard Page
Features
Protected Route Access
Fetch Users
Delete Users
AI Chatbot Section
API Integration
Loading States

Dark & Light Mode
The project supports dynamic theme switching using React Context API.
Theme Features
Dark Mode
Light Mode
Smooth UI Transition
Theme Toggle Button
Example
const {
  darkMode,
  toggleTheme,
} = useContext(ThemeContext);


Axios API Example
const res = await axios.get(
  "http://localhost:3000/api/users",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


Protected Routes
The dashboard route is protected using a custom ProtectedRoute component.
Example
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>


Common Errors & Solutions
1. CORS Error
Install CORS
npm install cors

Backend Configuration
const cors = require("cors");


app.use(cors());


2. React Hook Warning
Warning
React Hook useEffect has a missing dependency

Solution
Use useCallback().
Example
const fetchUsers = useCallback(() => {
  // API logic
}, []);


useEffect(() => {
  fetchUsers();
}, [fetchUsers]);


3. React Router Navigation Issue
Problem
Using <a href="/"> refreshes the page.
Solution
Use Link from react-router-dom.
Example
import { Link } from "react-router-dom";


<Link to="/login">Login</Link>


UI & CSS Features
Design Features
Modern Responsive Layout
Gradient Backgrounds
Rounded Inputs
Hover Effects
Smooth Animations
Clean Navbar Design
Mobile Responsive UI

Future Improvements
Real AI API Integration
Chat History
User Profile Management
Admin Dashboard
Image Upload
Voice Assistant
Fully Responsive Mobile Design
Database Optimization

Conclusion
This AI Chatbot Website project demonstrates:
Full-Stack MERN Development
REST API Integration
JWT Authentication
React State Management
Protected Routing
Responsive Web Design
AI Chatbot Functionality
Dark & Light Theme Management
This project is suitable for:
College Projects
Portfolio Projects
MERN Stack Practice
AI Chatbot Learning
Full-Stack Development Practice

