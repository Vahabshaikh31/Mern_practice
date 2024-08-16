const express = require("express");
const app = express();
const mongodb = require("./db");
const port = 8000;
const router = require("./router");

app.use(express.json()); // Parse incoming JSON requests
app.use(router); // Use router after parsing JSON

mongodb()
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  )
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
