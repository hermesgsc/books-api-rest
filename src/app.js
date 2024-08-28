import express from "express";
import dataBaseConnect from "./config/dbconnect.js";
import routes from "./routes/index.js";
const connection = await dataBaseConnect();

connection.on("error", (error)=> {
  console.error("Connection error", error)
})

connection.once("open", ()=>{
  console.log("Connection successfully")
})

const app = express();
routes(app)

export default app
