import { DataTypes, Sequelize } from "sequelize";

export default (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    role: { type: Sequelize.ENUM, values: ["patient", "doctor"] },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    languages: { type: DataTypes.JSON, defaultValue: {} },
    location: { type: DataTypes.JSON },
  });
};
