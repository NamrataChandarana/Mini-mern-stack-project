import { config } from "dotenv";
config({
    path: "./.env",
  });
import express from "express";
import todosRouter from './routers/todos.js'
import mongoose from "mongoose";
// import { addTodos, editTodos, getTodos, deleteTodos } from "./controllers/todosControllers";
// import { connectDB } from "./database/db.js";


const app = express();

const connectDB = (db) =>{
    mongoose.connect(process.env.MONGODB_LINK,{useNewUrlParser: true,
        useUnifiedTopology: true,})
  .then(() => console.log('Connected!')).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    // process.exit(1); // Exit the process with a failure code
});
}
connectDB()

app.use(express.json());
app.use('/todos', todosRouter)


app.listen(process.env.PORT, () => console.log(`server run on ${process.env.PORT}`))