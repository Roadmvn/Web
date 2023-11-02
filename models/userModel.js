// userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("utilisateurs", {
  nom: DataTypes.STRING,
  prenom: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  motDePasse: DataTypes.STRING,
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
