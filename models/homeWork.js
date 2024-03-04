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
  dueData: {
    type: Data,
    required: true,
  },

  stydentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

export const homeWork = mongoose.model("homeWork", homeWorkSchema);
