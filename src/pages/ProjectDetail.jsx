import React from "react";
import { useParams, Link } from "react-router-dom";
import useGitHubProjects from "../data/useGitHubProjects";
import Navbar from "../components/Navbar";
import SectionUnderline from "../components/SectionUnderline";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { repos, loading } = useGitHubProjects(100); // load all for lookup

  const project = repos.find((p) => p.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-white p-10">
        <Navbar />
        <p className="text-center text-gray-400">Loading project…</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-white p-10">
        <Navbar />
        <h1 className="text-center text-3xl text-red-500">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-white pb-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <SectionUnderline center>{project.title}</SectionUnderline>

        <p className="text-gray-400 text-sm mb-6 text-center">{project.subtitle}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[400px] object-cover rounded-lg border border-white/20 mb-8"
          />
        )}

        {project.description && (
          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary-alt text-black dark:text-white px-3 py-1 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Optional Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="w-full rounded-lg object-cover border border-white/10"
              />
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-6 text-sm mb-6">
          {project.github && (
            <a
              href={project.github}
              className="text-primary-alt underline hover:opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              className="text-primary-alt underline hover:opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="text-sm text-white underline hover:text-primary-alt transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
