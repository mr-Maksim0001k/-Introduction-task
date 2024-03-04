import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 3333;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@cluster0.ozuteyw.mongodb.net/todoList?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB okey"))
  .catch((err) => console.log("db error", err));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`сервер запущенный на порте ${port}`);
});
