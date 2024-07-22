const Project = require("../models/project");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAllProjects();
    return projects;
  } catch (err) {
    console.error("Database error during fetching projects", err);
    return res.status(500).json({ error: "Database error" });
  }
};

const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    } else {
      return project;
    }
  } catch (err) {
    console.error(`Database error during fetching project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

const createProject = async (req, res) => {
  const { name, description, startDate, endDate, status, screenShot } =
    req.body;

  try {
    const projectId = await Project.createProject(
      name,
      description,
      startDate,
      endDate,
      status,
      screenShot
    );
    return projectId;
  } catch (err) {
    console.error("Database error during project creation", err);
    return res.status(500).json({ error: "Database error" });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, endDate, status, screenShot } =
    req.body;

  try {
    const project = await Project.findProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    } else {
      const updatedProject = await Project.updateProject(
        id,
        name,
        description,
        startDate,
        endDate,
        status,
        screenShot
      );
      return updatedProject;
    }
  } catch (err) {
    console.error(`Database error during updating project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    } else {
      const deletedProject = await Project.deleteProject(id);
      return deletedProject;
    }
  } catch (err) {
    console.error(`Database error during deleting project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
