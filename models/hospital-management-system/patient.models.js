const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({ 

    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true
    },
    diagnosis:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,   
        required: true
    },
    blaodGroup:{
        type: String,
        required: true      
    },
    Gender:{
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    admittedIn:{
          type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{ timestamps: true })

export const patientModel = mongoose.model("Patient", patientSchema)