// import mongoose from "mongoose";
import {todosModel} from '../models/todos'

export const addTodos = async(req, res) =>{
    try{
        const {title, description, isComplete}  = req.body;

        const todo = await todosModel.create({
            title,
            description, 
            isComplete: false
        });
        res.status(200).json({
            success: true,
            todo
        })
    }catch(error){
        console.log("addtodos: error: ",error);
    }
}
export const getTodos = async(req, res) =>{
    try{
        const todos = await todosModel.find();
        res.status(200).json({
            success: true,
            todos
        })
    }catch(error){
        console.log("gettodos: error: ",error);
    }
}

export const editTodos = async(req, res) =>{
    try{
        const {title, description, isComplete}  = req.body;
        
        const todoId = req.params.id;
        
        if(!todoId){
            res.send(400).json('not able to get id')
        }

        const todo = await todosModel.findByIdAndUpdate(todoId, {
            title,
            description, 
            isComplete: false
        });
        res.status(200).json({
            success: true,
            message: "Todo Edited"
        })
    }catch(error){
        console.log("edittodos: error: ",error);
    }
}

export const deleteTodos = async(req, res) =>{
    try{
        let todoId = req.params.id;

        const todos = await todosModel.findById(todoId);

        if(!todoId){
            res.send(400).json('Invalid Todo ID')
        }

        await todosModel.deleteOne();
        
        res.status(200).json({
            success: true,
            message: "Todo Deleted"
        })
    }catch(error){
        console.log("gettodos: error: ",error);
    }
}
