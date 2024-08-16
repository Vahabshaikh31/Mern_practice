const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/registrationdb");
    console.log("connection succesfull to datbase");
  } catch (error) {
    console.log("Connection Failed", err);
    process.exit(0);
  }
};
module.exports = mongodb;
