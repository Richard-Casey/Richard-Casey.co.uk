import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Richard-Casey";

const EXCEPTION_TITLES = {
  "Richard-Casey.co.uk": "Richard-Casey.co.uk",
};

// Manual topic-to-tag mapping
const topicTagMap = {
  csharp: "C#",
  "visual-studio": "C#",
  wpf: "C#",
  cppplusplus: "C++",
  javascript: "JavaScript",
  typescript: "JavaScript",
  unity: "Unity",
  react: "React",
  "create-react-app": "React",
  tailwindcss: "Frontend",
  "rest-api": "API",
  json: "API",
  "console-app": "Console App",
  "data-entry": "Software",
  "retail-simulation": "Simulation",
  "inventory-management": "Simulation",
  simulation: "Simulation",
  education: "Coursework",
  university: "Coursework",
  honoursproject: "Coursework",
  "intro-to-programming": "Coursework",
  "tools-programming": "Coursework",
  "game-development": "Games",
  "game-mechanics": "Games",
  "game-engine": "Games",
  "graphics-programming": "Games",
  "intro-to-game-development": "Games",
  default: "Other",
};

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: process.env.REACT_APP_GH_TOKEN
    ? `Bearer ${process.env.REACT_APP_GH_TOKEN}`
    : undefined,
};

export default function useGitHubProjects(limit = 3) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async (fullName) => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${fullName}/topics`,
          { headers }
        );
        const json = await res.json();
        return json.names || [];
      } catch {
        return [];
      }
    };

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc`,
          { headers }
        );
        let data = await res.json();

        data = data
          .filter((r) => !r.fork && !r.private)
          .slice(0, limit);

        const withTopics = await Promise.all(
          data.map(async (repo) => {
            const topics = await fetchTopics(repo.full_name);

            const rawName = repo.name;
            const displayTitle =
              EXCEPTION_TITLES[rawName] ||
              rawName
                .replace(/-/g, " ")
                .replace(/([a-z])([A-Z])/g, "$1 $2");

            const mappedTags = topics.map(
              (t) => topicTagMap[t.toLowerCase()] || topicTagMap.default
            );
            const uniqueTags = [...new Set(mappedTags)];

            return {
              id: repo.id,
              title: displayTitle,
              subtitle: repo.description || "No description provided.",
              github: repo.html_url,
              liveDemo: repo.homepage || null,
              tags: uniqueTags.length ? uniqueTags : [repo.language || "Unknown"],
              image: "/images/projects/default.png",
              slug: rawName.toLowerCase(),
              topics,
            };
          })
        );

        setRepos(withTopics);
      } catch (err) {
        console.error("GitHub fetch failed", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [limit]);

  return { repos, loading };
}
