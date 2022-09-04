import { DataTypes, Sequelize } from "sequelize";

export default (sequelize) => {
  sequelize.define("Appointment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    rating: { type: DataTypes.SMALLINT },
    transcription: { type: DataTypes.TEXT, allowNull: false },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    denyReason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
