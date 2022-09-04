import { Router } from "express";
import { healthcheck } from "./service.js";

const router = Router();

router.get("/", (req, res) => {
  return res.dispatch.OK(healthcheck());
});

export default router;
