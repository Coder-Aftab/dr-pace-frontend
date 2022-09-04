import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import { Response } from "./middleware/index.js";

import * as controllers from "./api/index.js";

dotenv.config();

// App Instance
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(Response.middleware);

// Controllers
app.use("/", controllers.healthcheck);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Serving on http://127.0.0.1:${PORT}/`));
