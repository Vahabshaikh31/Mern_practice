const express = require("express");
const router = express.Router();
const userSchema = require("./userSchema");

router.post("/register", async (req, res) => {
  try {
    const user = new userSchema(req.body);
    await user.save();
    res.status(201).send(user);
    console.log("Data insertion succeeded");
  } catch (error) {
    res.status(400).send(error);
    console.error("Data insertion failed:", error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const user = await userSchema.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
    console.error("Data insertion failed:", error);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await userSchema.find({ _id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
    console.error("Data insertion failed:", error);
  }
});

module.exports = router; // Export the router object
