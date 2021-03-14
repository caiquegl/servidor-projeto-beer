module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("newsletters", {
      idNewsletter: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable("newsletters");
  },
};
