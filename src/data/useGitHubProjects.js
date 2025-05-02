import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Richard-Casey";

const EXCEPTION_TITLES = {
    "Richard-Casey.co.uk": "Richard-Casey.co.uk", // no formatting
  };
  
  export default function useGitHubProjects(limit = 3) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc`)
        .then((res) => res.json())
        .then((data) => {
          const filtered = data
            .filter(repo => !repo.fork && !repo.private)
            .slice(0, limit)
            .map(repo => {
              const rawName = repo.name;
  
              // Check for exception
              const displayTitle = EXCEPTION_TITLES[rawName] || rawName
                .replace(/-/g, " ")
                .replace(/([a-z])([A-Z])/g, "$1 $2");
  
              return {
                id: repo.id,
                title: displayTitle,
                subtitle: repo.description || "No description provided.",
                github: repo.html_url,
                liveDemo: repo.homepage || null,
                tags: [repo.language || "Unknown"],
                image: "/images/projects/default.png",
                slug: rawName.toLowerCase()
              };
            });
  
          setRepos(filtered);
          setLoading(false);
        });
    }, [limit]);
  
    return { repos, loading };
  }
  