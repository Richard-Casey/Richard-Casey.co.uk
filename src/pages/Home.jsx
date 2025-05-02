import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "../data/projects";
import SectionDivider from "../components/SectionDivider";
import HeroBackground from "../components/HeroBackground";
import SectionDividerHero from "../components/SectionDividerHero";
import Typewriter from "../components/Typewriter";
import profileImage from "../assets/mecropped2.png";
import symbolImage from "../assets/Symbol1.png";
import SectionGlowBar from "../components/SectionGlowBar";

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
      <section className="relative z-10 max-w-7xl mb-px mx-auto px-4">
        <div className="relative rounded-3xl border-2 border-black dark:border-white overflow-hidden shadow-lg">
          {/* Blue wash */}
          <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply z-0 pointer-events-none" />

          {/* Image background */}
          <HeroBackground />

          {/* Text block */}
          <div className="relative z-10 flex items-center justify-center min-h-[6rem] sm:min-h-[8rem] md:min-h-[10rem] px-6 text-center">
            {/* Blur layer below the text */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-dark-bg/40 z-0" />

            {/* Text layer */}
            <div className="relative z-10">
              <Typewriter
                text="Software & Full-Stack Developer | C# · React · WPF"
                speed={40}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDividerHero />

      {/* About Me Section */}
      <section className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Image area with symbol background */}
        <div className="relative w-35 h-35 md:w-48 md:h-48 flex-shrink-0 rounded-full border-[6px] border-primary overflow-hidden">
          {/* Outer white/black ring */}
          <div className="absolute inset-0 rounded-full border-[2px] border-black dark:border-white z-30" />

          {/* Blue wash overlay */}
          <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply z-20 pointer-events-none rounded-full" />

          {/* Profile image with fade mask */}
          <img
            src={profileImage}
            alt="Richard Casey"
            className="w-full h-full object-cover rounded-full fade-center z-30 relative"
          />

          {/* Symbol background */}
          <img
            src={symbolImage}
            alt="Symbol"
            className="absolute inset-0 w-full h-full object-contain opacity-50 z-0"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-primary-alt">
            About Me
          </h2>
          <SectionGlowBar />

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            I’m a Suffolk-based developer with a passion for honest, effective,
            and efficient software. With a strong background in C#, React, and
            full-stack development, I enjoy helping people solve real-world
            problems and turning ideas into working solutions. Whether it’s a
            game prototype, internal tool, or bespoke feature, I’ll find a way
            to make it happen.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Latest Projects Section */}
      <section className="mt-8 max-w-6xl mx-auto">
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
                  <h3 className="font-bold text-lg sm:text-base truncate underline">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-1">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
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
      <section className="mt-8 max-w-4xl mx-auto">
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
      <section className="mt-8 text-center">
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
