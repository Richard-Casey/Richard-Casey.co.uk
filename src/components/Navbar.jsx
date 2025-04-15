import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1.png";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="navbar">
      {/* Navbar Container */}
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-sm text-white hidden sm:inline">
              Software & Full-Stack Developer | C# · React · WPF
            </span>
          </div>
          
          <nav className="navbar-link-group">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/consultation" className="nav-link">
              Consultation
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {/* Divider Lines */}
      <div className="navbar-container">
        <div className="section-divider" />
        <div className="section-divider-white" />
      </div>
    </div>
  );
}

export default Navbar;
