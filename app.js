import express from "express";
import mongoose from "mongoose";
import postRouter from "./routing/post-routes";
import userRouter from "./routing/user-routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts",postRouter);

mongoose.connect("mongodb://localhost:27017/test")
.then(() =>
app.listen(5000, () =>
  console.log("Connection Succesfull  & Listening to localhost Port 5000")
)
)
.catch((err) => console.log(err));