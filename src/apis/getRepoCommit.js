const TGH = process.env.token;

const getRepoCommits = async (owner, repo, nombre) => {
  if (!owner || !repo) {
    console.warn("Owner or repo is missing, skipping API call.", nombre);
    return null;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${TGH}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const commits = await response.json();
    return commits;
  } catch (error) {
    console.error(
      `Failed to fetch commits for repo ${repo}, owner ${owner}.`,
      error
    );
    return null;
  }
};

export default getRepoCommits;
