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

console.log("Server started")

const url="mongodb://admin:admin@ac-2mob2r2-shard-00-00.qpaicwi.mongodb.net:27017,ac-2mob2r2-shard-00-01.qpaicwi.mongodb.net:27017,ac-2mob2r2-shard-00-02.qpaicwi.mongodb.net:27017/?ssl=true&replicaSet=atlas-4mcaoh-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(url)
.then(() =>
app.listen(5000, () =>
  console.log("Connection Succesfull  & Listening to localhost Port 5000")
)
)
.catch((err) => console.log(err));