const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./model/Student");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Add Student
app.post("/add", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added");
});

// Get Students
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
