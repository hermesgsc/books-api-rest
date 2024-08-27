import book from "../models/Book.js";

class bookController {

    static async getBookList (req, res) {
        try {
        const bookList = await book.find({})
        res.status(200).json(bookList)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - REQUISITION FAIL` });

        }
    }

    static async postBookRegister (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({message: "Book registered sucessfully", data: newBook})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FAIL` });
        }
    }

    static async getBookById (req, res) {
        try {
            const id = req.params.id
        const foundBook = await book.findById(id)
        res.status(200).json(foundBook)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - REQUISITION FAIL` });
        }
    }

    static async updateBookById (req, res) {
        try {
        const id = req.params.id
        const updatedBook = await book.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedBook)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - REQUISITION FAIL` });
        }
    }

    static async deleteBookById (req, res) {
        try {
        const id = req.params.id
        const deletedBook = await book.findByIdAndDelete(id, req.body)
        res.status(200).json(deletedBook)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - REQUISITION FAIL` });
        }
    }
}



export default bookController