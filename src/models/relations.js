const initRelations = (sequelize) => {
  const { User, Consultation, Appointment, Slot } = sequelize.models;

  User.hasMany(Consultation);
  Consultation.belongsTo(User, { foreignKey: "patientId" });
  Consultation.belongsTo(User, { foreignKey: "doctorId" });

  User.hasMany(Appointment);
  Appointment.belongsTo(User, { foreignKey: "patientId" });
  Appointment.belongsTo(User, { foreignKey: "doctorId" });

  User.hasMany(Slot);
  Slot.belongsTo(User, { foreignKey: "doctorId" });
};

export default initRelations;
