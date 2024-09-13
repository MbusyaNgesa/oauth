import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authroutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//For Testing
// app.get("/", (req, res) => {
//   res.send("Hello Ngesa");
// });
app.use(express.json()); //allow us to parse incoming requests: req.body

app.use("/api/auth", authroutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
