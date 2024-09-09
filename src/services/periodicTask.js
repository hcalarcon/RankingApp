import {
  getPersonAndRepoData as getRepo,
  saveRate,
} from "../controllers/alumnos.js";
import getCommitRate from "./getCommitRate.js";

const persona = await getRepo();

const executeTask = async () => {
  try {
    persona.forEach(async (persona) => {
      const commitRate = await getCommitRate(persona.username, persona.repo);
      const saved = await saveRate(persona.username, commitRate);
      return saved;
    });
  } catch (error) {
    console.log("Error en fetchgit", error);
  }
};

const periodicTask = () => {
  executeTask();
  setInterval(executeTask, 216000000);
};

export default periodicTask;
