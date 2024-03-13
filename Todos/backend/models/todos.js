import mongoose from 'mongoose'


const Schema = mongoose.Schema;


const todosSchema = new Schema({
    title: String,
    description: String,
    isComplete: Boolean
})

export const  todosModel = mongoose.model('todos', todosSchema);