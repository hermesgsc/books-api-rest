import express from "express"
import bookController from "../controller/bookController.js"

const routes = express.Router()

routes.get("/books", bookController.getBookList)
routes.post("/books", bookController.postBookRegister)


export default routes