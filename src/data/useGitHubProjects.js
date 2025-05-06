import { useEffect, useState } from "react";
import topicTagMap from "./tagMap";

const GITHUB_USERNAME = "Richard-Casey";
const EXCEPTION_TITLES = {
  "Richard-Casey.co.uk": "Richard-Casey.co.uk",
};

export default function useGitHubProjects(limit = 100) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=${limit}`
        );
        const baseRepos = await res.json();

        const filtered = baseRepos
          .filter((repo) => !repo.fork && !repo.private)
          .slice(0, limit);

        const enrichedRepos = await Promise.all(
          filtered.map(async (repo) => {
            // Fetch topics separately
            const topicRes = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`,
              {
                headers: {
                  Accept: "application/vnd.github.mercy-preview+json",
                },
              }
            );
            const topicData = await topicRes.json();
            const topics = topicData.names || [];

            const mappedTags = topics.map((t) => topicTagMap[t] || topicTagMap.default);
            const uniqueTags = [...new Set(mappedTags)];

            const rawName = repo.name;
            const displayTitle =
              EXCEPTION_TITLES[rawName] ||
              rawName.replace(/-/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");

            return {
              id: repo.id,
              title: displayTitle,
              subtitle: repo.description || "No description provided.",
              github: repo.html_url,
              liveDemo: repo.homepage || null,
              tags: uniqueTags.length ? uniqueTags : [repo.language || "Unknown"],
              image: "/images/projects/default.png",
              slug: rawName.toLowerCase(),
            };
          })
        );

        setRepos(enrichedRepos);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [limit]);

  return { repos, loading };
}
