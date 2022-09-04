import { Router } from "express";

const router = Router();

router.post("/register/doctor", (req, res) => {});

router.post("/register/patient", (req, res) => {});

router.put("/update/profile", (req, res) => {});

router.post("/login", (req, res) => {});

router.get("/logout", (req, res) => {});

router.post("/request-otp", (req, res) => {});

router.post("/verify-otp", (req, res) => {});

router.get("/profile", (req, res) => {
  res.dispatch.OK("profile");
});

export default router;
