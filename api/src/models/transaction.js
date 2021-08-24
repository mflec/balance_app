const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define('transaction', {
    // Tu código acá:
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: new Date(),
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });
}