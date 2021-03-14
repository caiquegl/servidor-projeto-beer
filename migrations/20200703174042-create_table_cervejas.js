module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cervejas", {
      idCerveja: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nota: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING(60000),
        allowNull: false,
      },
      precoMedio: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      pequenaDescri: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localidadeIMG:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      localidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estiloIMG:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estilo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      ml:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      coloracaoIMG:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      coloracao:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempIdeal:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      amargorIMG:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      amargor:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      aparencia:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      aroma:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      teor:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      harmonizacao:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cervejaria:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      filtro:{
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("cervejas");
  },
};
