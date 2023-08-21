const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CityOrigin",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
