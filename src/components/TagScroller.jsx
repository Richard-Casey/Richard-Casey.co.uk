import React from "react";

function TagScroller({ tags, activeTag, onTagClick }) {
  const sortedTags = [
    "All",
    ...[...tags].filter((tag) => tag !== "All").sort(),
  ];

  return (
    <div className="relative max-w-6xl mx-auto mb-10">
      {/* Alphabetized Tags with Scroll Overflow on Mobile */}
      <div className="relative overflow-x-auto sm:overflow-x-visible">
        <div className="flex flex-wrap justify-center gap-2 min-w-fit px-4 py-2">
          {sortedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition whitespace-nowrap
      ${
        activeTag === tag
          ? "bg-primary-alt text-black dark:text-white font-bold"
          : "border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Fades for horizontal overflow (mobile only) */}
        <div className="sm:hidden pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent" />
        <div className="sm:hidden pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent" />
      </div>
    </div>
  );
}

export default TagScroller;
