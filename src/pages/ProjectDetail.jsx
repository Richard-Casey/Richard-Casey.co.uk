import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-white dark:text-white p-10">
        <Navbar />
        <h1 className="text-center text-3xl text-red-500">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white dark:text-white pb-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[var(--primary-blue-alt)] mb-2">
          {project.title}
        </h1>
        <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[400px] object-cover rounded mb-6"
          />
        )}

        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[var(--primary-blue-alt)] text-black dark:text-white px-3 py-1 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Optional Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="w-full rounded object-cover"
              />
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              className="text-[var(--primary-blue-alt)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              className="text-[var(--primary-blue-alt)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="text-sm text-white dark:text-white underline hover:text-[var(--primary-blue-alt)]"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
