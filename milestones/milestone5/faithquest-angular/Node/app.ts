import express from "express";
import dotenv from "dotenv";
import hopeRoutes from "./routes/hopeRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/hope", hopeRoutes);

app.get("/", (req, res) => {
  res.send("Faith Quest API is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});