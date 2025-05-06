import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";
import { useGitHubProjectsContext } from "../context/GitHubProjectsContext";
import projectImageMap from "../data/projectImageMap";
import SectionUnderline from "../components/SectionUnderline";


function Projects() {
  const { repos: projects, loading } = useGitHubProjectsContext();
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
        className="w-full min-h-screen bg-light-bg dark:bg-dark-bg text-black dark:text-white px-6 py-10 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
<div className="text-center mb-10">
  <SectionUnderline className="text-primary-alt">Projects</SectionUnderline>
</div>


        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition
                ${activeTag === tag
                  ? "bg-primary-alt text-black dark:text-white font-bold"
                  : "border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"}
              `}
              
            >
              {tag}
            </button>
          ))}
        </div>

        <SectionDivider />

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => {
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
                      if (!e.target.dataset.fallback) {
                        e.target.dataset.fallback = true;
                        e.target.src = "/images/projects/default.png";
                      }
                    }}
                    className="w-full h-48 object-cover rounded border-2 border-black dark:border-white mb-4"
                  />

                  <div className="glass-white mt-auto p-3 h-36 flex flex-col justify-center text-center border-2 border-black dark:border-white rounded overflow-hidden">
                    <h3 className="font-bold text-lg sm:text-base underline whitespace-nowrap overflow-hidden text-ellipsis -mt-3">
                      {project.title}
                    </h3>
                    <p className="text-xs mt-0.5 overflow-hidden text-ellipsis line-clamp-6 leading-tight">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex justify-end gap-3 mt-4">
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
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
