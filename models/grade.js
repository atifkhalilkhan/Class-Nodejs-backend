const { type } = require("express/lib/response");
const { default: mongoose, model } = require("mongoose");

const GradeSchema = mongoose.Schema({
       title:{
        type:String,
        required: true,
       },
       sections:{
        type: String,
        required: true,
       },
         totalStudents:{
        type: Number,


       }
})

const GradeModel = mongoose.model("grade",GradeSchema)

module.exports = GradeModel