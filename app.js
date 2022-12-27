import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(
  json({
    limit: "25MB",
  })
);

import contact from "./server/routes/contactrouter.js";

import users from "./server/routes/userrouter.js";

import log from "./server/routes/logrouter.js";





app.use("/contact", contact);

app.use("/user", users);

app.use("/log", log);



app.use("/pro",(req,res)=>{
  res.send(" it ok")
});




export default app;
