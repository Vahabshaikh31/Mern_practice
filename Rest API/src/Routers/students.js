const express = require("express");
const router = new express.Router();
const Students = require("../Models/Students"); // Ensure your Students model is correctly defined


router.post("/students", async (req, res) => {
  try {
    const user = new Students(req.body);
    await user.save();
    res.status(201).send(user);
    console.log("Data insertion succeeded");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.get("/students", async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;

    const students = await Students.find({ name: { $eq: name } });
    console.log(name);
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.patch("/students/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpadteStudents = await Students.findByIdAndUpdate(_id, req.body);

    res.status(200).send(UpadteStudents);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.delete("/students/delet/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpadteStudents = await Students.findByIdAndDelete(_id);
    res.status(200).send(UpadteStudents);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});


module.exports = router;