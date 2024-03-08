import { Student } from "../models/student.js";

export const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res.status(404).json({
        message: "Could not find students",
      });
    }

    res.status(200).json({
      students,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const addStudent = async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
      class: req.body.class,
    });

    const newStudent = await student.save();

    res.status(201).json({
      newStudent,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
