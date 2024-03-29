import express from "express";
import mongoose from "mongoose";
import { config } from "./config.js";
import { getAllStudent, addStudent } from "./controllers/studentsController.js";
import {
  getAllHomeWork,
  addHomeWork,
  removeHomeWork,
  updateHomeWork,
} from "./controllers/homeWorkController.js";

const app = express();

const port = 3333;

app.use(express.json());

mongoose
  .connect(config.DB_URL)
  .then(() => console.log("DB okey"))
  .catch((err) => console.log("db error", err));

app.get("/api/students", getAllStudent);

app.post("/api/students", addStudent);

app.get("/api/homeworks", getAllHomeWork);

app.post("/api/homeworks", addHomeWork);

app.delete("/api/homeworks/:id", removeHomeWork);

app.patch("/api/homeworks/:id", updateHomeWork);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is running on port ${port}`);
});
