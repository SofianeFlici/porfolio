const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/client");
const { Op } = require("sequelize");

const secret = process.env.SECRET_TOKEN;

const register = async (
  name,
  firstname,
  address,
  email,
  password,
  phone,
  type
) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      firstname,
      address,
      email,
      password: hashedPassword,
      phone,
      type,
    });
    return user;
  } catch (error) {
    throw new Error("Erreur lors de l'enregistrement de l'utilisateur");
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Mot de passe incorrect");
    }

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });
    return token;
  } catch (error) {
    throw new Error("Erreur lors de la connexion");
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des utilisateurs");
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de l'utilisateur");
  }
};

const updateUser = async (id, name, firstname, address, email, phone, type) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    user.name = name;
    user.firstname = firstname;
    user.address = address;
    user.email = email;
    user.phone = phone;
    user.type = type;

    await user.save();
    return user;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de l'utilisateur");
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    await user.destroy();
    return user;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de l'utilisateur");
  }
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Token invalide");
  }
};

module.exports = {
  register,
  login,
  verifyToken,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
