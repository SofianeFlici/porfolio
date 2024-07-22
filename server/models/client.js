const db = require("../config/database");

const Client = {
  findByClientEmail: async (email) => {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
  create: async (name, firstname, address, email, password, phone, type) => {
    existingUser = await Clients.findByUserEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    } else {
      const [result] = await db
        .promise()
        .query(
          "INSERT INTO clients (name, firstname, address, email, password, phone, type) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, firstname, address, email, password, phone, type]
        );
      return result.insertId;
    }
  },
  findById: async (id) => {
    const [rows] = await db.promise().query("SELECT * FROM clients WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  findAll: async () => {
    const [rows] = await db.promise().query("SELECT * FROM clients");
    return rows;
  },

  update: async (id, name, firstname, address, email, phone, type) => {
    const [result] = await db
      .promise()
      .query(
        "UPDATE clients SET name = ?, firstname = ?, address = ?, email = ?, phone = ?, type = ? WHERE id = ?",
        [name, firstname, address, email, phone, type, id]
      );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db
      .promise()
      .query("DELETE FROM clients WHERE id = ?", [id]);
    return result.affectedRows;
  },
};

module.exports = Client;
