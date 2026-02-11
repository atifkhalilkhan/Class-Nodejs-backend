import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})


const OrderSchema = new mongoose.Schema({

    OrderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    OrderItems: {
        type: [OrderItemSchema],

    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    }




}, { timestamps: true })

export const OrderModel = mongoose.model("Order", OrderSchema)