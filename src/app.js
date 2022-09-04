import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";

import { Response } from "./middleware/index.js";

import * as controllers from "./api/index.js";

import Database from "./models/index.js";

const initApp = async () => {
  console.log("Loading environment variables");
  dotenv.config();

  console.log("Creating app instance");
  const app = express();

  console.log("Initializing database connection");

  await Database.init({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  await Database.defineModels();

  console.log("Stacking middlewares");
  app.use(helmet());
  app.use(cors());
  app.use(morgan("common"));
  app.use(express.json());
  app.use(Response.middleware);

  console.log("Adding routes");
  app.use("/api/user", controllers.user);
  app.use("/api/doctor", controllers.doctor);
  app.use("/api/slot", controllers.slot);
  app.use("/api/consultation", controllers.consultation);
  app.use("/api/appointment", controllers.appointment);

  app.use(controllers.notFound);
  app.use(controllers.errorHandler);

  console.log("Starting up the server");
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Serving on http://127.0.0.1:${PORT}/`));
};

await initApp();
