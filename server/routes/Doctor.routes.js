const express = require("express");
const router = express.Router();
const doctorController = require("../controller/Doctor.controller");

// Get all doctors
router.get("/", doctorController.getAllDoctors);
// Add a new doctor
router.post("/", doctorController.addDoctor);
// Delete a doctor
router.delete("/:id", doctorController.deleteDoctor);
// Update a doctor
router.put("/:id", doctorController.updateDoctor);
module.exports = router;