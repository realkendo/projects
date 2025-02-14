import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// initialize dotenv
dotenv.config();

// initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// middleware for parsing json data
app.use(express.json());

// middleware to use product routes
app.use("/api/products", productRoutes);

// port
app.listen(PORT, () => {
  connectDB();
  console.log("Server started @ https://localhost:" + PORT);
});
