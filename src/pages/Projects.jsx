import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useGitHubProjects from "../data/useGitHubProjects";
import projectImageMap from "../data/projectImageMap";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import SectionUnderline from "../components/SectionUnderline";

export default function Projects() {
  const { repos, loading } = useGitHubProjects(100);

  const allTags = React.useMemo(() => {
    const tagSet = new Set();
    (repos || []).forEach((r) => (r.tags || []).forEach((t) => tagSet.add(t)));
    return ["All", ...Array.from(tagSet).sort()];
  }, [repos]);

  const [activeTag, setActiveTag] = useState("All");

  const list = repos || [];
  const filteredProjects =
    activeTag === "All"
      ? list
      : list.filter((p) => (p.tags || []).includes(activeTag));

  const Tile = ({ project }) => {
    const imageFile =
      projectImageMap[project.title] || `${project.title}.png`;

    return (
      <Link
        to={`/projects/${project.slug}`}
        className="p-1 border-2 border-black dark:border-white rounded-lg hover:scale-[1.03] transition-transform duration-300"
      >
        <div className="glass-blue p-4 border-2 border-primary rounded-lg shadow-md flex flex-col justify-between h-full">
          <img
            src={`/images/projects/${imageFile}`}
            alt={project.title}
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = true;
                e.target.src = "/images/projects/default.png";
              }
            }}
            className="w-full h-48 object-cover rounded border border-black dark:border-white mb-4"
          />

          <div className="glass-white p-3 flex-1 flex flex-col justify-center text-center border-2 border-black dark:border-white rounded overflow-hidden">
            <h3 className="font-bold text-lg underline whitespace-nowrap overflow-hidden text-ellipsis">
              {project.title}
            </h3>
            <p className="text-xs mt-1 line-clamp-3 leading-tight">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {(project.tags || []).map((t) => (
                <span
                  key={t}
                  className="bg-primary-alt text-black dark:text-white px-2 py-0.5 text-[10px] rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  };

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
<SectionUnderline center>Projects</SectionUnderline>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition
                ${
                  activeTag === tag
                    ? "bg-primary-alt text-black dark:text-white font-bold"
                    : "border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <SectionDivider />

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400 my-10">
            Fetching repositories…
          </p>
        )}

        {!loading && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <Tile key={project.id} project={project} />
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
