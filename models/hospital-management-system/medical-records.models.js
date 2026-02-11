const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({ },{ timestamps: true })

export const medicalRecordModel = mongoose.model("MedicalRecord", medicalRecordSchema)