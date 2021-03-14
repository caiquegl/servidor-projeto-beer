"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comentarios", {
      idComentario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idCerveja: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "cervejas",
          },
          key: "idCerveja",
        },
      },
      comentario: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nota: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      nomeUsuario: {
        type: Sequelize.STRING,
      },
      dataCriada: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comentarios");
  },
};
