const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/Appoinment.controller');

// Get all appointments
router.get('/', appointmentController.getAllAppointments);
// Add a new appointment
router.post('/', appointmentController.addAppointment);
// Delete an appointment
router.delete('/:id', appointmentController.deleteAppointment);
// Update an appointment
router.put('/:id', appointmentController.updateAppointment);
module.exports = router;