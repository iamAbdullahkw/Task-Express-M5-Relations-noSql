const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB!");
  } catch (error) {
    console.log("Connection to DB failed!", error);
  }
};

module.exports = connectDB;
