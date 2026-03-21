import express from "express";
import { connectDB } from "./config/db.js";
import productsRouter from "./routes/products.route.js";

const app = express();

app.use(express.json());

app.use("/api/products", productsRouter);

app.listen(5000, async () => {
  console.log("Server is running on port 5000");
  await connectDB();
});
