import express from "express";

const app = express();

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

app.get("/", (req, res)=> {
    res.status(200).send("Node.JS course");
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.post("/books", (req, res) => {
    books.push(req.body);
})

export default app