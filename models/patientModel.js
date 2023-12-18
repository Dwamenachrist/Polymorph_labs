// models/patient.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  surname: { type: String, required: true },
  othernames: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  residentialAddress: { type: String, required: true },
  emergencyContact: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    relationship: { type: String, required: true },
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
