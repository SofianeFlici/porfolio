const db = require("../config/database");

const Project = {
  findAllProjects: async () => {
    const [rows] = await db.promise().query("SELECT * FROM projects");
    return rows;
  },
  findProjectById: async (id) => {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM projects WHERE id = ?", [id]);
    return rows[0];
  },
  createProject: async (
    name,
    description,
    startDate,
    endDate,
    status,
    screenShot
  ) => {
    const [result] = await db
      .promise()
      .query(
        "INSERT INTO projects (name, description, startDate, endDate, status, screenShot) VALUES (?, ?, ?, ?, ?, ?)",
        [name, description, startDate, endDate, status, screenShot]
      );
    return result.insertId;
  },
  updateProject: async (
    id,
    name,
    description,
    startDate,
    endDate,
    status,
    screenShot
  ) => {
    const [result] = await db
      .promise()
      .query(
        "UPDATE projects SET name = ?, description = ?, startDate = ?, endDate = ?, status = ?, screenShot = ? WHERE id = ?",
        [name, description, startDate, endDate, status, screenShot, id]
      );
    return result.affectedRows;
  },
  deleteProject: async (id) => {
    const [result] = await db
      .promise()
      .query("DELETE FROM projects WHERE id = ?", [id]);
    return result.affectedRows;
  },
};

module.exports = Project;
