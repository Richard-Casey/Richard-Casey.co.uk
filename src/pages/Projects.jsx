import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";

function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <>
      <Navbar />
      <motion.div
        className="w-full min-h-screen bg-white dark:bg-black text-white px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-primary-alt mb-10">
          Projects
        </h1>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                activeTag === tag
                  ? "bg-primary-alt text-black dark:text-white font-bold"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <SectionDivider />

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.id}
              className="bg-light-bg dark:bg-[#1a1a1a] rounded-lg p-4 shadow-md flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-alt text-black dark:text-white px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-sm text-primary-alt hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="text-sm text-primary-alt hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
