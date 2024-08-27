import express from "express";
import dataBaseConnect from "./config/dbconnect.js";

const connection = await dataBaseConnect();

connection.on("error", (error)=> {
console.error("Connection error", error)
})

connection.once("open", ()=>{
    console.log("Connection successfully")
})

const app = express();
app.use(express.json())

const books = [
    {
        id: 1,
        title: "Learning JavaScript"
    },
    {
        id: 2,
        title: "Learning TypeScript"
    }
]

function findBooks(id) {
    return books.findIndex(books => {
        return books.id === Number(id)
    })
}

app.get("/", (req, res)=> {
    res.status(200).send("Node.JS course");
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book registered successfully")
})

app.get("/books/:id", (req, res) => {
    const index = findBooks(req.params.id)
    res.status(200).json(books[index])
})

app.put("/books/:id", (req, res) => {
    const index = findBooks(req.params.id);
    books[index].title = req.body.title
    res.status(200).json(books[index])
}) 

app.delete("/books/delete/:id", (req, res) =>{
    const index =  findBooks(req.params.id)
    books.splice(index, 1)
    res.status(200).json({
        message: "Deletado com sucesso",
        data: books[index]
    })
})

export default app
