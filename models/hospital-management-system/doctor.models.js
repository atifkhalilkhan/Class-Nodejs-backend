const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({ 

    name:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true
    },
    
},{ timestamps: true })

export const doctorModel = mongoose.model("Doctor", doctorSchema)