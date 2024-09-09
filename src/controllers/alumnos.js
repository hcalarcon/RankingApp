import pool from "../datadabse.js";
const validApiKey = process.env.API_KEY;

export const getAllPersons = async (req = null, res = null) => {
  try {
    const q = "SELECT * FROM personas";
    const [result] = await pool.query(q);

    if (res) return res.status(200).json(result);

    return result;
  } catch (error) {
    console.log("error en getAllPersons", error);

    if (res) return res.status(500).json({ error: error });

    throw error;
  }
};

export const saveRate = async (name, rate) => {
  try {
    const q = "UPDATE personas SET rankg=? WHERE username=?";
    const datos = [rate, name];
    const [result] = await pool.query(q, datos);

    return result.affectedRows === 1;
  } catch (error) {
    console.log("Error en savaRate", error);
  }
};

export const getPersonAndRepoData = async (req = null, res = null) => {
  try {
    const q = `
      SELECT DISTINCT
      p.id,
        p.nombre, 
        p.apellido, 
        p.rankg, 
        p.username, 
        r.nombre AS repo
      FROM personas p
      LEFT JOIN repositorios r ON p.id = r.persona_id
    `;

    const [result] = await pool.query(q);

    if (res) return res.status(200).json(result);

    return result;
  } catch (error) {
    console.error("Error en getPersonAndRepoData", error);
    if (res) return res.status(500).json({ error: error });

    throw error;
  }
};

export const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey && apiKey === validApiKey) {
    next();
  } else {
    res.status(403).json({ error: "Acceso denegado: clave API no válida" });
  }
};
