const Patient = require("../models/Patient.Model");

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addPatients = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deletePatients = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient Not Found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!patient) {
      return res.status(404).json({ message: "Patient Not Found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPatients, addPatients, deletePatients,updatePatient };
