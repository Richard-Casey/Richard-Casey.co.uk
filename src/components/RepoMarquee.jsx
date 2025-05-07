import React from "react";
import { Marquee } from "./Marquee";
import projectImageMap from "../data/projectImageMap";

function RepoMarquee({ repos }) {
  const ReviewCard = ({ project }) => {
    const imageFile = projectImageMap[project.slug] || `${project.slug}.png`;

    return (
      <div className="w-72 flex-shrink-0 p-1 border-2 border-black dark:border-white rounded-lg hover:scale-[1.05] transition-transform duration-300 mx-1">
        <div className="glass-blue p-4 border-2 border-primary rounded-lg shadow-md flex flex-col justify-between h-full">
          <img
            src={`/images/projects/${imageFile}`}
            alt={project.title}
            className="w-full h-40 object-cover rounded border border-black dark:border-white mb-2"
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = true;
                e.target.src = "/images/projects/default.png";
              }
            }}
          />
          <div className="glass-white p-3 h-24 flex flex-col justify-center text-center border-2 border-black dark:border-white rounded overflow-hidden">
            <h3 className="font-bold text-base underline whitespace-nowrap overflow-hidden text-ellipsis">
              {project.title}
            </h3>
            <p className="text-xs mt-1 line-clamp-2 leading-tight">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <Marquee pauseOnHover duration="80s">
        {repos.map((project) => (
          <ReviewCard key={project.id} project={project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent" />
    </div>
  );
}

export default RepoMarquee;
