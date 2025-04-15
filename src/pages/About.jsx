import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <motion.div
        className="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-container">
          <h1 className="about-title">About Me</h1>

          <p className="about-paragraph">
            I'm Richard Casey, a Suffolk-based software and full-stack developer with a passion for problem-solving and honest, effective development. With a strong foundation in C#, React, and modern UI/UX practices, I specialize in creating bespoke tools, dynamic websites, and engaging game prototypes that meet real-world needs.
          </p>

          <p className="about-paragraph">
            I thrive when turning ideas into working solutions — whether it’s streamlining charity workflows, rebuilding internal tools from scratch, or crafting modular React sites. I'm resourceful, always learning, and committed to delivering clean, efficient software that works.
          </p>

          {/* Timeline */}
          <div className="mt-10">
            <h2 className="about-section-header">Experience Timeline</h2>
            <ul className="about-timeline-list">
              <li>
                <span className="timeline-year">2025:</span> Built Encompass Work Tracker (WPF) – GDPR-compliant replacement for Airtable
              </li>
              <li>
                <span className="timeline-year">2024:</span> Developed The Other-Half Hub – React microsite with dynamic blocks
              </li>
              <li>
                <span className="timeline-year">2024:</span> Final Year Project – Stock & Shop, nominated for TIGA Awards
              </li>
              <li>
                <span className="timeline-year">2023–24:</span> University of Suffolk – BSc (Hons) Games Development (Programming)
              </li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-10">
            <h2 className="about-section-header">Toolset & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {["C#", "React", "WPF", "Unity", "Tailwind", "MongoDB", "JavaScript", "Framer Motion"].map((tool) => (
                <span key={tool} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CV + Links */}
          <div className="about-links">
            <a
              href="/docs/Richard-Casey-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv-btn"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Richard-Casey"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/richard-casey"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
