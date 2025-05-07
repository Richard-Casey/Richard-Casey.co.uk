import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";
import { useGitHubProjectsContext } from "../context/GitHubProjectsContext";
import projectImageMap from "../data/projectImageMap";
import SectionUnderline from "../components/SectionUnderline";
import TagScroller from "../components/TagScroller";
import GlassmorphismContainer from "../components/GlassmorphismContainer";
import FramedImage from "../components/FramedImage";

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

        <SectionDivider />

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
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="w-full sm:w-[23rem] p-1 border-2 border-black dark:border-white rounded-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="glass-blue p-4 border-2 border-primary rounded-lg shadow-md flex flex-col justify-between h-full">
                  <FramedImage
                    src={`/images/projects/${imageFile}`}
                    alt={project.title}
                    className="h-48 mb-4"
                  />

                  <GlassmorphismContainer
                    variant="white"
                    padding="p-3"
                    className="h-36 flex flex-col justify-center text-center rounded overflow-hidden"
                  >
                    <h3 className="font-bold text-lg underline whitespace-nowrap overflow-hidden text-ellipsis -mt-3">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-0.5 overflow-hidden text-ellipsis line-clamp-6 leading-tight">
                      {project.subtitle}
                    </p>
                  </GlassmorphismContainer>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
