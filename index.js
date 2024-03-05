import express from "express";
import mongoose from "mongoose";
import { config } from "./config.js";

const app = express();

const port = 3333;

app.use(express.json());

mongoose
  .connect(config.DB_URL)
  .then(() => console.log("DB okey"))
  .catch((err) => console.log("db error", err));

app.get("/api/students");

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`сервер запущенный на порте ${port}`);
});
