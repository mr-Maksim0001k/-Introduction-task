import { Student } from "../models/student.js";

export const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();
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
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    class: req.body.class,
  });
  try {
    const newStudent = await student.save();
    res.status(200).json({
      newStudent,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};
