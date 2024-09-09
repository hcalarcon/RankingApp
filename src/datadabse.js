import { config } from "./config.js";
import { createPool } from "mysql2/promise";

const pool = createPool(config);

export default pool;
