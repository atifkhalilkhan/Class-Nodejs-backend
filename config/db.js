const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      ""
    );

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectdb;
