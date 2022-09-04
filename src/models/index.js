import { Sequelize } from "sequelize";

import User from "./user.model.js";
import Consultation from "./consultation.model.js";
import Appointment from "./appointment.model.js";
import Slots from "./slot.model.js";
const modelsMakers = [User, Consultation, Appointment, Slots];

import initRelations from "./relations.js";

class Database {
  static #db;

  constructor() {}

  static async init({ host, database, username, password }) {
    if (!this.#db) {
      this.#db = new Sequelize(database, username, password, {
        host,
        dialect: "postgres",
        logging: false,
      });
    }

    this.validateConnection();

    return this.#db;
  }

  static async validateConnection() {
    try {
      await this.#db.authenticate();
      console.log("Database connected successfuly");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }
  }

  static async defineModels() {
    modelsMakers.forEach((modelMaker) => modelMaker(this.#db));
    initRelations(this.#db.models);

    // Sync with database
    this.#db.sync();
  }

  static get models() {
    if (this.#db) {
      return this.#db.models;
    }
  }
}

export default Database;
