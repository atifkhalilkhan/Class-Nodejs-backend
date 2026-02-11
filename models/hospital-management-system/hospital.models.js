const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({ },{ timestamps: true })

export const hospitalModel = mongoose.model("hospital", hospitalSchema)