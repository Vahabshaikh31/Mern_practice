const express = require("express");
const app = express();
const mongodb = require("./Login Logout/db"); // Ensure your db connection is correctly implemented
// const Students = require("./Models/Students"); // Ensure your Students model is correctly defined
// const StudentRouters = require("./Routers/students");
const router = require("./Login Logout/routers");

const port = process.env.PORT || 8002;
app.use(router);

app.use(express.json());
// app.use(StudentRouters);

mongodb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => { 
    console.error("Error in app.js:", err);
  });
