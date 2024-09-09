import { Router } from "express";
import {
  getAllPersons,
  getPersonAndRepoData,
  apiKeyMiddleware,
} from "../controllers/alumnos.js";

const routerAlumnos = Router();

routerAlumnos.get("/getAll", getAllPersons);

routerAlumnos.get("/getRepo", apiKeyMiddleware, getPersonAndRepoData);

export default routerAlumnos;
