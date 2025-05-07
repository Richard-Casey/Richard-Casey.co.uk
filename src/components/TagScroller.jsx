import React from "react";

function TagScroller({ tags, activeTag, onTagClick }) {
  return (
    <div className="relative max-w-full overflow-x-auto sm:overflow-x-visible mb-10">
      <div className="flex sm:flex-wrap sm:justify-center space-x-2 sm:space-x-0 sm:space-y-2 sm:space-x-2 min-w-fit px-4 py-2">
        {tags.map((tag) => (
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

      {/* Shadow fades for scrollable overflow (mobile only) */}
      <div className="sm:hidden pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent" />
      <div className="sm:hidden pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent" />
    </div>
  );
}

export default TagScroller;
