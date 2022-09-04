import { DataTypes, Sequelize } from "sequelize";

export default (sequelize) => {
  sequelize.define("Slot", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    startTime: { type: DataTypes.TIME, allowNull: false },
    endTime: { type: DataTypes.TIME, allowNull: false },
    type: { type: Sequelize.ENUM, values: ["appointment", "instant"] },
  });
};
