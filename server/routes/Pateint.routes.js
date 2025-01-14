const express = require("express");
const router = express.Router();
const patientController = require("../controller/Pateinte.controller");

// Get all patients
router.get("/", patientController.getAllPatients);
// Add a new patient
router.post("/", patientController.addPatients);
// Delete a patient
router.delete("/:id", patientController.deletePatients);
// Update a patient
router.put("/:id", patientController.updatePatient);
module.exports = router;
