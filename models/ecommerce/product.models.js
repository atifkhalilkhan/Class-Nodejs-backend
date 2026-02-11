import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    dedscription: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ProductImage: {
        type: String,

    },
    price: {
        type: sting,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    catorgory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }



}, { timestamps: true })

export const ProductModel = mongoose.model("Product", ProductSchema)