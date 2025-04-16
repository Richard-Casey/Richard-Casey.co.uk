import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1.png";
import ThemeToggle from "./ThemeToggle";
import SectionDividerThin from "./SectionDividerThin";

function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-light-bg dark:bg-dark-bg">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4">
      <div className="h-[64px] flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-sm text-black dark:text-white hidden sm:inline">
              Software & Full-Stack Developer | C# · React · WPF
            </span>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              to="/home"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/consultation"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              Consultation
            </Link>
            <Link
              to="/contact"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-black dark:text-white text-sm hover:text-primary-alt transition-colors duration-300"
            >
              About
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {/* Divider Lines */}
      <SectionDividerThin />

    </div>
  );
}

export default Navbar;
