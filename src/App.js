import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./component/Nabar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProtectedRoute from "./component/ProtectedRoute";

import {ThemeProvider,} from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
       </ThemeProvider>
  );
}

export default App;