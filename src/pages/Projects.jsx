import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";
import { useGitHubProjectsContext } from "../context/GitHubProjectsContext";
import projectImageMap from "../data/projectImageMap";
import SectionUnderline from "../components/SectionUnderline";
import TagScroller from "../components/TagScroller";

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
          <SectionUnderline className="text-primary-alt">
            Projects
          </SectionUnderline>
        </div>

        {/* Tag Filters */}
        <TagScroller
          tags={allTags}
          activeTag={activeTag}
          onTagClick={setActiveTag}
        />

        <SectionDivider />

        {/* Project Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => {
            const imageFile =
              projectImageMap[project.slug] || `${project.slug}.png`;

            return (
              <div
                key={project.id}
                className="w-full sm:w-[23rem] p-1 border-2 border-black dark:border-white rounded-lg"
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
                    <h3 className="font-bold text-lg underline whitespace-nowrap overflow-hidden text-ellipsis -mt-3">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-0.5 overflow-hidden text-ellipsis line-clamp-6 leading-tight">
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
