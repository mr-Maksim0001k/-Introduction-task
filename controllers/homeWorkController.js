import { HomeWork } from "../models/homeWork";

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
  const homeWorks = new HomeWork({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    stydentId: req.body.stydentId,
  });

  try {
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
