import getRepoCommits from "../apis/getRepoCommit.js";

const commitsRate = (commitMessages) => {
  const objetivos = new Set([
    "Objetivo 0",
    "Objetivo 1",
    "Objetivo 2",
    "Objetivo 3",
    "Objetivo 4",
    "Objetivo 5",
    "Objetivo 6",
    "Objetivo 7",
    "Objetivo 8",
    "Objetivo 9",
    "Objetivo 10",
  ]);

  let rate = 0;
  const objetivosContados = new Set();

  commitMessages.forEach((mensaje) => {
    if (objetivos.has(mensaje) && !objetivosContados.has(mensaje)) {
      rate++;
      objetivosContados.add(mensaje);
    }
  });
  return rate;
};

const getCommitRate = async (owner, repo, nombre) => {
  try {
    const commits = await getRepoCommits(owner, repo, nombre);

    if (!Array.isArray(commits)) {
      return 0;
    }
    let commitRate = 1;
    const commitMessages = commits.map((commit) => commit.commit.message);

    commitRate += commitsRate(commitMessages);
    return commitRate;
  } catch (error) {}
};

export default getCommitRate;
