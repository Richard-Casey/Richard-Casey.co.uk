import { createContext, useState, useEffect, useContext } from "react";
import useGitHubProjects from "../data/useGitHubProjects";

const GitHubProjectsContext = createContext();

export const GitHubProjectsProvider = ({ children }) => {
  const { repos, loading } = useGitHubProjects(100);
  const [cachedRepos, setCachedRepos] = useState([]);

  useEffect(() => {
    if (!loading && repos.length) {
      setCachedRepos(repos);
    }
  }, [repos, loading]);

  return (
    <GitHubProjectsContext.Provider value={{ repos: cachedRepos, loading }}>
      {children}
    </GitHubProjectsContext.Provider>
  );
};

export const useGitHubProjectsContext = () => useContext(GitHubProjectsContext);
