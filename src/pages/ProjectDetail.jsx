import React from "react";
import { useParams, Link } from "react-router-dom";
import useGitHubProjects from "../data/useGitHubProjects";
import Navbar from "../components/Navbar";
import SectionUnderline from "../components/SectionUnderline";
import projectMeta from "../data/projectMeta";
import ReactMarkdown from "react-markdown";
import readmeMap from "../data/readmeMap";
import GlassmorphismContainer from "../components/GlassmorphismContainer";
import FramedImage from "../components/FramedImage";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { repos, loading } = useGitHubProjects(100);

  const project = repos.find((p) => p.slug === slug);
  const meta = projectMeta[slug];
  const readmeFile = readmeMap[slug];

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

        {/* Image */}
        {project.image && (
          <div className="mb-8 p-1 rounded-lg border-[3px] border-primary">
            <FramedImage
              src={project.image}
              alt={project.title}
              className="h-[350px] w-full object-contain"
            />
          </div>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary-alt text-gray-800 font-bold px-4 py-2 text-sm sm:text-base rounded shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Subtitle in glass-white */}
        {project.subtitle && (
          <div className="flex justify-center mb-6">
            <div className="glass-subtitle max-w-full text-center text-sm">
              {project.subtitle}
            </div>
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

        {/* GitHub Button */}
        {project.github && (
          <div className="mt-6 text-center">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="uiverse-button mb-6">
                Direct GitHub Repository
              </button>
            </a>
          </div>
        )}

{/* Markdown README */}
{readmeFile && (
  <div className="glass-readme prose prose-light dark:prose-dark max-w-none mb-10 mt-10 px-2">

    <ReactMarkdown>{readmeFile}</ReactMarkdown>
  </div>
)}


        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link to="/projects">
            <button className="uiverse-button">Back to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
