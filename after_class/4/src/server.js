import morgan from "morgan";
import express from "express";

import { productRouter } from "./routes/product.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
