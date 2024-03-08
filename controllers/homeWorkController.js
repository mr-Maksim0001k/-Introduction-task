import { HomeWork } from "../models/homeWork.js";

export const getAllHomeWork = async (req, res) => {
  try {
    const homeWorks = await HomeWork.find();
    res.status(200).json({
      homeWorks,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const addHomeWork = async (req, res) => {
  try {
    const homeWorks = new HomeWork({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      studentId: req.body.studentId,
    });

    const newHomeWork = await homeWorks.save();
    res.status(200).json({
      newHomeWork,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const removeHomeWork = async (req, res) => {
  try {
    const homeWorkId = req.params.id;

    console.log("homeWorkID", homeWorkId);

    const homeWorks = await HomeWork.findOneAndDelete({ _id: homeWorkId });

    if (!homeWorks) {
      return res.status(404).json({
        message: "Homework not found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateHomeWork = async (req, res) => {
  try {
    const homeWorkId = req.params.id;

    console.log("homeWorkID", homeWorkId);

    const updatedHomeWork = await HomeWork.findOneAndUpdate(
      { _id: homeWorkId },
      {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
      },
      { new: true }
    );

    if (!updatedHomeWork) {
      return res.status(404).json({
        message: "Couldn't find homework",
        success: false,
      });
    }

    res.status(200).json({
      updatedHomeWork,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
