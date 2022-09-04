import User from "./user.model.js";
import Consultation from "./consultation.model.js";
import Appointment from "./appointment.model.js";
import Slots from "./slot.js";

import initRelations from "./relations.js";

const models = [User, Consultation, Appointment, Slots];

const defineModels = (db) => {
  models.forEach((modelMaker) => modelMaker(db));
  initRelations(db);

  // Sync with database
  db.sync();
};

export default defineModels;
