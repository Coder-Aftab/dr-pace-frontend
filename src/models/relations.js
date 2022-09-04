const initRelations = (models) => {
  const { User, Consultation, Appointment, Slot } = models;

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
