import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./mongodb/connect.js";

import userRouter from "../server/routes/user.routes.js";
import propertyRouter from "../server/routes/property.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => {
      console.log("server started started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
