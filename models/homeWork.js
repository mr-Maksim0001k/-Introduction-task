import mongoose from "mongoose";

const homeWorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },

  stydentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

export const HomeWork = mongoose.model("HomeWork", homeWorkSchema);
