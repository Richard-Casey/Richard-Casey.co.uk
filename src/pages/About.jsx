import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <motion.div
        className="w-full min-h-screen px-6 py-10 bg-white dark:bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-primary-alt">About Me</h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm Richard Casey, a Suffolk-based software and full-stack developer with a passion for problem-solving and honest, effective development. With a strong foundation in C#, React, and modern UI/UX practices, I specialize in creating bespoke tools, dynamic websites, and engaging game prototypes that meet real-world needs.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I thrive when turning ideas into working solutions — whether it’s streamlining charity workflows, rebuilding internal tools from scratch, or crafting modular React sites. I'm resourceful, always learning, and committed to delivering clean, efficient software that works.
          </p>

          {/* Timeline */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary-alt">Experience Timeline</h2>
            <ul className="text-sm text-gray-400 space-y-2 border-l border-primary-alt pl-4">
              <li>
                <span className="text-white dark:text-white">2025:</span> Built Encompass Work Tracker (WPF) – GDPR-compliant replacement for Airtable
              </li>
              <li>
                <span className="text-white dark:text-white">2024:</span> Developed The Other-Half Hub – React microsite with dynamic blocks
              </li>
              <li>
                <span className="text-white dark:text-white">2024:</span> Final Year Project – Stock & Shop, nominated for TIGA Awards
              </li>
              <li>
                <span className="text-white dark:text-white">2023–24:</span> University of Suffolk – BSc (Hons) Games Development (Programming)
              </li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary-alt">Toolset & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {["C#", "React", "WPF", "Unity", "Tailwind", "MongoDB", "JavaScript", "Framer Motion"].map((tool) => (
                <span
                  key={tool}
                  className="bg-primary-alt text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CV + Links */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="/docs/Richard-Casey-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-alt text-black dark:text-white font-semibold py-2 px-4 rounded hover:opacity-90"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Richard-Casey"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm text-white dark:text-white hover:text-primary-alt"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/richard-casey"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm text-white dark:text-white hover:text-primary-alt"
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
