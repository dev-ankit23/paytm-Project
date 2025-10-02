import express from "express";
import rootRouter from "./routes/index.js";
import cors from "cors";

const app = express();

app.use("/api/v1", rootRouter); // 👈 mounts all routes under /api/v1

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
