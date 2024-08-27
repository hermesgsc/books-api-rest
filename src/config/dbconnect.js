import mongoose from "mongoose"

async function dataBaseConnect() {
mongoose.connect("mongodb+srv://admin:admin123@cluster0.wqxyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
}

export default dataBaseConnect;