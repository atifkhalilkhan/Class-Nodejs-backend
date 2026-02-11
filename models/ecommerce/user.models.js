import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({

username:{
    type: String,
    required: true,
     unique: true, 
     lowercase: true
    },

    password:{
        type: String,
        required: true,
        minlength:6,
    }
       
},{timestamps:true})


export const UserModel = mongoose.model("User", UserSchema)

