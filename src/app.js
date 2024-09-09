import express from "express";
import periodicTask from "./services/periodicTask.js";
import routerAlumnos from "./router/alumnos.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(routerAlumnos);
periodicTask();

export default app;
