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
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    otp: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    languages: { type: DataTypes.JSON, defaultValue: {} },
    location: { type: DataTypes.JSON },
  });
};
