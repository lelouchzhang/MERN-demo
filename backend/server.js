import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(5000, async () => {
  console.log("Server is running on port 5000");
  await connectDB();
});
