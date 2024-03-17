// import mongoose from "mongoose";
import {todosModel} from '../models/todos'
import {createTodo, updateTodo} from '../type'

export const addTodos = async(req, res) =>{
    try{
        const createPayload  = req.body;
        const parsePayload  = createPayload.safeParse(createPayload);
        if(!parsePayload.success){
           res.status(411).json({
            msg:"your sent the wrong input",
           })
        }

        const todo = await todosModel.create({
            title: createPayload.title,
            description: createPayload.description, 
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
        const createPayload  = req.body;
        const parsePayload  = updateTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"Not able to access Id",
            })
         }
        
        // const todoId = req.params.id;
        
        // if(!todoId){
        //     res.send(400).json('not able to get id')
        // }

        const todo = await todosModel.findByIdAndUpdate(todoId, {
            title,
            description, 
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
        const createPayload  = req.body;
        const parsePayload  = updateTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"Not able to access Id",
            })
         }

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
