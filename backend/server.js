import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import productsRouter from "./routes/products.route.js";

const app = express();

app.use(express.json());

app.use("/api/products", productsRouter);

// when deploy
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(5000, async () => {
  console.log("Server is running on port 5000");
  await connectDB();
});
