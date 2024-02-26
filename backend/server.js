import dotenv from "dotenv";
import connectDB from "./config/database.js";
import colors from "colors";
import morgan from "morgan";
import express from "express";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Config env
dotenv.config();

//connect db
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 8080}`.bgBlue.white
  );
});

/* 
install express-formidable to upload any file from local machine 
*/
