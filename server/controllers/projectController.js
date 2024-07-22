const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAllProjects();
    return res.status(200).json(projects);
  } catch (err) {
    console.error("Database error during fetching projects", err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    } else {
      return res.status(200).json(project);
    }
  } catch (err) {
    console.error(`Database error during fetching project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.createProject = async (req, res) => {
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
    return res.status(201).json({ message: "Project created", projectId });
  } catch (err) {
    console.error("Database error during project creation", err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.updateProject = async (req, res) => {
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
      return res
        .status(200)
        .json({ message: "Project updated", updatedProject });
    }
  } catch (err) {
    console.error(`Database error during updating project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    } else {
      await Project.deleteProject(id);
      return res.status(200).json({ message: "Project deleted" });
    }
  } catch (err) {
    console.error(`Database error during deleting project with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};
