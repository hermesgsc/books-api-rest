import mongoose, { Schema, version } from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: mongoose.Schema.Types.String, required: true},
    amount: {type: mongoose.Schema.Types.Number, required: true},
},
{ versionKey: false }) 

const book = mongoose.model("books", bookSchema)


export default book;