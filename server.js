import app from "./app.js";
import mongoose from "mongoose";
import { config } from "dotenv";

// connect is used to connect DB
const { connect } = mongoose;

config({
  path: "./.env",
});



const port = process.env.PORT || 8000;

connect("mongodb+srv://kasim:123456kasi@cluster0.wj30r.mongodb.net/botell").then((res) => {
  console.log("DB Connected");
});


app.listen(port, () => {
  console.log("Connected");
});
