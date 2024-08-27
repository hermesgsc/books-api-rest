import express from "express";
import dataBaseConnect from "./config/dbconnect.js";
import routes
 from "./routes/index.js";
const connection = await dataBaseConnect();

connection.on("error", (error)=> {
console.error("Connection error", error)
})

connection.once("open", ()=>{
    console.log("Connection successfully")
})

const app = express();
routes(app)

app.delete("/books/delete/:id", (req, res) =>{
    const index =  findBooks(req.params.id)
    books.splice(index, 1)
    res.status(200).json({
        message: "Deletado com sucesso",
        data: books[index]
    })
})

export default app
