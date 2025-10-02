import express from "express";
import userRouter from "./user.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter); // 👈 mounts user routes under /api/v1/user

export default rootRouter;
