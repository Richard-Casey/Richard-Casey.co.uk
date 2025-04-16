import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import SectionDivider from "../components/SectionDivider";

function Home() {
  return (
    <motion.div
      className="w-full min-h-screen bg-light-bg dark:bg-dark-bg text-black dark:text-white px-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="text-center mt-10">
        <h1
          className="text-4xl text-gray-800 dark:text-gray-300
"
        >
          Software & Full-Stack Developer | C# · React · WPF · MongoDB
        </h1>
      </section>

      <SectionDivider />

      {/* About Me Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-primary-alt">
          About Me
        </h2>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          I’m a Suffolk-based developer with a passion for honest, effective,
          and efficient software. With a strong background in C#, React, and
          full-stack development, I enjoy helping people solve real-world
          problems and turning ideas into working solutions. Whether it’s a game
          prototype, internal tool, or bespoke feature, I’ll find a way to make
          it happen.
        </p>
      </section>

      <SectionDivider />

      {/* Latest Projects Section */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-primary-alt">
          Latest Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
        {projects.slice(-3).map((project) => (
  <div
    key={project.id}
    className="p-1 border-2 border-black dark:border-white rounded-lg"
  >
    <div className="glass-blue p-4 border-2 border-primary rounded-lg shadow-md flex flex-col justify-between">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded border-2 border-black dark:border-white mb-4"
        />
      )}
      <div className="glass-white mt-auto p-3 h-24 flex flex-col justify-center text-center border-2 border-black dark:border-white rounded">
        <h3 className="font-bold text-lg sm:text-base truncate underline">{project.title}</h3>
        <p className="text-sm mt-1">{project.subtitle}</p>
      </div>
    </div>
  </div>
))}

        </div>

        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="text-primary-alt hover:underline text-sm"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Services Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-primary-alt">
          Services Offered
        </h2>
        <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300 space-y-2">
          <li>Custom Software Development</li>
          <li>Web Applications (React, Tailwind, MongoDB)</li>
          <li>Game Prototypes & Indie Game Projects</li>
          <li>Workflow Tools (C# · WPF · Internal Solutions)</li>
          <li>Consultation for Technical Projects</li>
        </ul>
      </section>

      <SectionDivider />

      {/* Contact CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-primary-alt">
          Let’s Build Something
        </h2>
        <p className="text-gray-700 dark:text-gray-400 my-4">
          Got an idea or need some help bringing it to life?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary-alt text-black dark:text-white font-bold py-2 px-6 rounded hover:bg-primary transition"
        >
          Contact Me
        </Link>
      </section>
    </motion.div>
  );
}

export default Home;
