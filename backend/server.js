import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";
import authroutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//For Testing
// app.get("/", (req, res) => {
//   res.send("Hello Ngesa");
// });

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); //allow us to parse incoming requests: req.body
app.use(cookieParser()); //allow us to parse incoming cookies
app.use("/api/auth", authroutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
