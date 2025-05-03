import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import HeroBackground from "../components/HeroBackground";
import SectionDividerHero from "../components/SectionDividerHero";
import Typewriter from "../components/Typewriter";
import profileImage from "../assets/mecropped2.png";
import symbolImage from "../assets/Symbol1.png";
import SectionGlowBar from "../components/SectionGlowBar";
import useGitHubProjects from "../data/useGitHubProjects";
import projectImageMap from "../data/projectImageMap";
import RepoMarquee from "../components/RepoMarquee";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FadeInSection from "../components/FadeInSection";

const topProjects = [
  "stock-and-shop",
  "the-other-half-hub-website",
  "encompass-work-tracker",
];

function Home() {
  const { repos, loading } = useGitHubProjects(100);

  return (
    <motion.div
      className="w-full min-h-screen bg-light-bg dark:bg-dark-bg text-black dark:text-white px-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <section className="relative z-10 max-w-7xl mb-px mx-auto px-4">
        <div className="relative rounded-3xl border-2 border-black dark:border-white overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply z-0 pointer-events-none" />
          <HeroBackground />
          <div className="relative z-10 flex items-center justify-center min-h-[6rem] sm:min-h-[8rem] md:min-h-[10rem] px-6 text-center">
            <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-dark-bg/40 z-0" />
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
      <section className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="relative w-35 h-35 md:w-48 md:h-48 flex-shrink-0 rounded-full border-[6px] border-primary overflow-hidden">
          <div className="absolute inset-0 rounded-full border-[2px] border-black dark:border-white z-30" />
          <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply z-20 pointer-events-none rounded-full" />
          <img
            src={profileImage}
            alt="Richard Casey"
            className="w-full h-full object-cover rounded-full fade-center z-30 relative"
          />
          <img
            src={symbolImage}
            alt="Symbol"
            className="absolute inset-0 w-full h-full object-contain opacity-50 z-0"
          />
        </div>
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
      <section className="mt-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-primary-alt">
          Top Projects
        </h2>
        <SectionGlowBar />
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading top projects...
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {repos
              .filter((project) => topProjects.includes(project.slug))
              .map((project) => {
                const imageFile =
                  projectImageMap[project.title] || `${project.title}.png`;
                return (
                  <div
                    key={project.id}
                    className="p-1 border-2 border-black dark:border-white rounded-lg"
                  >
                    <div className="glass-blue p-4 border-2 border-primary rounded-lg shadow-md flex flex-col justify-between">
                      <img
                        src={`/images/projects/${imageFile}`}
                        alt={project.title}
                        onError={(e) => {
                          console.warn("Missing image for:", imageFile);
                          if (!e.target.dataset.fallback) {
                            e.target.dataset.fallback = true;
                            e.target.src = "/images/projects/default.png";
                          }
                        }}
                        className="w-full h-48 object-cover rounded border-2 border-black dark:border-white mb-4"
                      />
                      <div className="glass-white mt-auto p-3 h-24 flex flex-col justify-center text-center border-2 border-black dark:border-white rounded overflow-hidden">
                        <h3 className="font-bold text-lg sm:text-base underline whitespace-nowrap overflow-hidden text-ellipsis -mt-3">
                          {project.title}
                        </h3>
                        <p className="text-xs mt-0.5 overflow-hidden text-ellipsis line-clamp-4 leading-tight">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        <div className="mt-6 text-center">
          <Link to="/projects">
            <button className="uiverse-button">View All Projects</button>
          </Link>
        </div>
        <SectionDivider />
      </section>
      <FadeInSection className="mt-8 max-w-6xl mx-auto">
      <section className="mt-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-primary-alt">
          Latest Projects
        </h2>
        <SectionGlowBar />
        <RepoMarquee repos={repos} />
        <div className="mt-6 text-center">
          <Link to="/projects">
            <button className="uiverse-button">View All Projects</button>
          </Link>
        </div>
      </section>
      </FadeInSection>
      <SectionDivider />
      <section className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-primary-alt">
          Services Offered
        </h2>
        <SectionGlowBar />
        <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300 space-y-2">
          <li>Custom Software Development</li>
          <li>Web Applications (React, Tailwind, MongoDB)</li>
          <li>Game Prototypes & Indie Game Projects</li>
          <li>Workflow Tools (C# · WPF · Internal Solutions)</li>
          <li>Consultation for Technical Projects</li>
        </ul>
      </section>
      <SectionDivider />
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
