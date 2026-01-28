const { default: mongoose } = require("mongoose")

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://class-work:classwork123@class-work.qf5kcmv.mongodb.net/studentDB").then(() => {
            console.log("db connect")
            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = connectDB



