const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Annonce = sequelize.define("annonces", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  entreprise_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_publication: {
    type: DataTypes.STRING,
  },
  salaire: {
    type: DataTypes.STRING,
  },
  lieu: {
    type: DataTypes.STRING,
  },
  temps_travail: {
    type: DataTypes.STRING,
  },
});

module.exports = Annonce;
