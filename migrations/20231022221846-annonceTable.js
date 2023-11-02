'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('annonces', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      entreprise_id: {
        type: Sequelize.INTEGER,
      },
      date_publication: {
        type: Sequelize.STRING,
      },
      salaire: {
        type: Sequelize.STRING,
      },
      lieu: {
        type: Sequelize.STRING,
      },
      temps_travail: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('current_timestamp'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('current_timestamp'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('annonces');
  },
};
