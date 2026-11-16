export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

const fetchGitHubJson = async path => {
  const response = await fetch(`https://api.github.com${path}`);
  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }
  return response.json();
};

export const fetchGitHubUser = async username => {
  const user = await fetchGitHubJson(`/users/${encodeURIComponent(username)}`);
  return {
    id: user.id,
    name: user.name || user.login,
    bio: user.bio,
    location: user.location,
    avatarUrl: user.avatar_url
  };
};

export const fetchGitHubRepos = async username => {
  const repos = await fetchGitHubJson(
    `/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
  );
  return repos.map(repo => ({
    node: {
      id: repo.id,
      url: repo.html_url,
      name: repo.name,
      description: repo.description,
      primaryLanguage: repo.language
        ? {name: repo.language, color: "#6e7781"}
        : null,
      forkCount: repo.forks_count,
      stargazers: {totalCount: repo.stargazers_count},
      diskUsage: repo.size
    }
  }));
};
