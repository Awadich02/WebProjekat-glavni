import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"; // Ensure this path is correct
import About from "./pages/About"; // Ensure this path is correct
import Cars from "./pages/Cars"; // Ensure this path is correct
import Contact from "./pages/Contact"; // Ensure this path is correct
import AuthPage from "./pages/AuthPage"; // Page for both login and registration
import Dashboard from "./pages/Dashboard"; // Ensure this path is correct
import "./styles/index.css"; // Ensure your CSS file is correctly imported

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
