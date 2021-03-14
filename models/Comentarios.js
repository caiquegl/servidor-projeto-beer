module.exports = (sequelize, DataType) => {
    const Comentarios = sequelize.define(
      "Comentarios",
      {
        idComentario: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idUsuario: {
          type: DataType.INTEGER,
          allowNull: false,
        },
        idCerveja: {
          type: DataType.INTEGER,
        },
        comentario: {
          type: DataType.STRING,
          allowNull: false,
        },
        nota: {
          type: DataType.INTEGER,
          allowNull: false,
        },
        nomeUsuario: {
          type: DataType.STRING,
        },
        dataCriada: {
          allowNull: false,
          type: DataType.STRING,
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
        tableName: "comentarios",
      }
    );



    Comentarios.associate = (models) => {
      Comentarios.belongsTo(models.Cerveja, { foreignKey: "idCerveja", as: 'cervejas' });
    };
  
    return Comentarios;
  };
  