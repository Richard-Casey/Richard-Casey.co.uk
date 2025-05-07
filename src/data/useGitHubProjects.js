import { useEffect, useState } from "react";
import projectMeta from "./projectMeta";

const GITHUB_USERNAME = "Richard-Casey";
const EXCEPTION_TITLES = {
  "Richard-Casey.co.uk": "Richard-Casey.co.uk",
};

export default function useGitHubProjects(limit = 100) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cached = localStorage.getItem("github_repos_cache");
        const cachedTime = localStorage.getItem("github_repos_cache_time");
        const isFresh =
          cached && cachedTime && Date.now() - cachedTime < 60 * 60 * 1000;

        if (isFresh) {
          setRepos(JSON.parse(cached));
          setLastUpdated(parseInt(cachedTime));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=${limit}`
        );

        const baseRepos = await res.json();

        const filtered = baseRepos
          .filter((repo) => !repo.fork && !repo.private)
          .slice(0, limit);

        const enrichedRepos = filtered.map((repo) => {
          const rawName = repo.name;
          const slug = rawName.toLowerCase();
          const displayTitle =
            EXCEPTION_TITLES[rawName] ||
            rawName.replace(/-/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");

          const meta = projectMeta[slug] || {};

          return {
            id: repo.id,
            title: displayTitle,
            subtitle: repo.description || "No description provided.",
            github: repo.html_url,
            liveDemo: repo.homepage || null,
            tags: meta.tags || [repo.language || "Unknown"],
            image: `/images/projects/${slug}.png`,
            slug,
            readme: meta.readme || null,
          };
        });

        localStorage.setItem(
          "github_repos_cache",
          JSON.stringify(enrichedRepos)
        );
        localStorage.setItem("github_repos_cache_time", Date.now());

        setRepos(enrichedRepos);
        setLastUpdated(Date.now());
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [limit]);

  return { repos, loading, lastUpdated };
}
