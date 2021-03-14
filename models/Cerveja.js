module.exports = (sequelize, DataType) => {
    const Cerveja = sequelize.define(
      "Cerveja",
      {
        idCerveja: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: DataType.STRING,
          allowNull: false,
        },
        nota: {
          type: DataType.INTEGER,
          allowNull: false,
        },
        foto: {
          type: DataType.STRING(60000),
          allowNull: false,
        },
        precoMedio: {
          type: DataType.FLOAT,
          allowNull: false,
        },
        pequenaDescri: {
          type: DataType.STRING(100),
          allowNull: false,
        },
        descricao: {
          type: DataType.STRING,
          allowNull: false,
        },
        localidadeIMG:{
          type: DataType.STRING,
          allowNull: false,
  
        },
        localidade:{
          type: DataType.STRING,
          allowNull: false,
        },
        estiloIMG:{
          type: DataType.STRING,
          allowNull: false,
        },
        estilo:{
          type: DataType.STRING,
          allowNull: false,
        },
        ml:{
          type: DataType.STRING,
          allowNull: false,
        },
        coloracaoIMG:{
          type: DataType.STRING,
          allowNull: false,
        },
        coloracao:{
          type: DataType.STRING,
          allowNull: false,
        },
        tempIdeal:{
          type: DataType.STRING,
          allowNull: false,
        },
        amargorIMG:{
          type: DataType.STRING,
          allowNull: false,
        },
        amargor:{
          type: DataType.STRING,
          allowNull: false,
        },
        aparencia:{
          type: DataType.STRING,
          allowNull: false,
        },
        aroma:{
          type: DataType.STRING,
          allowNull: false,
        },
        teor:{
          type: DataType.STRING,
          allowNull: false,
        },
        harmonizacao:{
          type: DataType.STRING,
          allowNull: false,
        },
        cervejaria:{
          type: DataType.STRING,
          allowNull: false,
        },
        categoria:{
          type: DataType.STRING,
          allowNull: false,
        },
        filtro:{
          type: DataType.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataType.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataType.DATE,
        },
      },
      {
        tableName: "cervejas",
      }
    );
  
    Cerveja.associate = (models) => {
      Cerveja.hasMany(models.Comentarios, { foreignKey: "idUsuario", as: "comentarios" })
    };


    return Cerveja;
  };
  