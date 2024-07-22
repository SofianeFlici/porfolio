const Client = require("../models/client");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Client.findByUserEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(`Database error during login for user: ${email}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.register = async (req, res) => {
  const { name, firstname, address, email, password, phone, type } = req.body;

  try {
    const existingClient = await Client.findByUserEmail(email);
    if (existingClient) {
      return res.status(409).json({ error: "Client already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await Client.create(
        name,
        firstname,
        address,
        email,
        hashedPassword,
        phone,
        type
      );
      return res.status(201).json({ message: "Client registered", userId });
    }
  } catch (err) {
    console.error("Database error during registration", err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const users = await Client.findAll();
    return res.status(200).json(users);
  } catch (err) {
    console.error("Database error during fetching clients", err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.getClientById = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    console.error(`Database error during fetching client with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, firstname, address, email, phone, type } = req.body;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    } else {
      const updatedUser = await Client.update(
        id,
        name,
        firstname,
        address,
        email,
        phone,
        type
      );
      return res.status(200).json({ message: "User updated", updatedUser });
    }
  } catch (err) {
    console.error(`Database error during updating user with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    } else {
      const deletedClient = await Client.delete(id);
      return res.status(200).json({ message: "Client deleted", deletedClient });
    }
  } catch (err) {
    console.error(`Database error during deleting client with id: ${id}`, err);
    return res.status(500).json({ error: "Database error" });
  }
};
