import {
  getPersonAndRepoData as getRepo,
  saveRate,
} from "../controllers/alumnos.js";
import getCommitRate from "./getCommitRate.js";
import getCurrentTime from "./time.js";

const persona = await getRepo();
const hora = 3600000; //una hora en milisegundo
const periodo = hora * 12;

const executeTask = async () => {
  try {
    const time = getCurrentTime();
    persona.forEach(async (persona) => {
      const commitRate = await getCommitRate(persona.username, persona.repo);
      const saved = await saveRate(persona.username, commitRate, time);
      return saved;
    });
  } catch (error) {
    console.log("Error en fetchgit", error);
  }
};

const periodicTask = () => {
  executeTask();
  setInterval(executeTask, periodo);
};

export default periodicTask;
