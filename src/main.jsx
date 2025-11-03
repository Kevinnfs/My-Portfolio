import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./About.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Experience from "./Experience.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mx-auto ">
      <Navbar />
      <Sidebar />
      <App />
      <About />
      <Experience />
    </div>
  </StrictMode>
);
