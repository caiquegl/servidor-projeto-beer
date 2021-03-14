module.exports = (sequelize, DataType) => {
    const newsletters = sequelize.define(
      "newsletters",
      {
        idNewsletter: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        
        email: {
          type: DataType.STRING,
          allowNull: false,
          unique: true,
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
        tableName: "newsletters",
      }
    );
  
  
  
  
    return newsletters;
  };
  