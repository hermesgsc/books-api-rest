import express from "express";
import bookController from "../controller/bookController.js";

const routes = express.Router();

routes.get("/books", bookController.getBookList);
routes.post("/books", bookController.postBookRegister);
routes.get("/books/:id", bookController.getBookById);
routes.put("/books/:id", bookController.updateBookById);
routes.delete("/books/:id", bookController.deleteBookById);

export default routes;
