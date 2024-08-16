const mongoose = require("mongoose");

const db = async () => {
  try {
    const cn = mongoose.connect(
      "mongodb+srv://vahabs:Svahab3101@cluster0.jb9arqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("successful connection ");
  } catch (error) {
    console.log("DataBase Error", error);
  }
};

module.exports = db;