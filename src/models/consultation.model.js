import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Consultation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    timing: { type: DataTypes.TIME, allowNull: false },
    agenda: { type: DataTypes.TEXT, default: "" },
  });
};
