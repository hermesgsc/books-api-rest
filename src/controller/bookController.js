import book from "../models/Book.js";

class bookController {

    static async getBookList (req, res) {
        const bookList = await book.find({})
        res.status(200).json(bookList)
    }

    static async postBookRegister (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({message: "Book registered sucessfully", data: newBook})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }

    static async getBookById (req, res) {
        const getBookById = await book.find({})
        res.statuds(200).json(getBookById)
    }
}



export default bookController