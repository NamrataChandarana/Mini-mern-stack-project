import express from "express";
import { todosModel } from "../models/todos";
import {createTodo, updateTodo} from '../type'
// import { addTodos, editTodos, getTodos, deleteTodos } from "../controllers/todosControllers";

const router = express.Router();


router.post('/addtodos', async(req, res) =>{
    try{
        const createPayload  = req.body;
        const parsePayload  = createTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"wrong input ",
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
})

router.get('/gettodos', async(req, res) =>{
    try{
        const todos = await todosModel.find();
        res.status(200).json({
            success: true,
            todos
        })
    }catch(error){
        console.log("gettodos: error: ",error);
    }
})

router.delete('/deletetodos', async(req, res) =>{
    try{
        const deletePayload  = req.body;
        const parsePayload  = deleteTodo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"wrong input ",
            })
         }

        const todo = await todosModel.findById(deletePayload.id);

        await todosModel.deleteOne(todo);
        
        res.status(200).json({
            success: true,
            message: "Todo Deleted"
        })
    }catch(error){
        console.log("gettodos: error: ",error);
    }
})

router.put('/completed', async(req, res) =>{
    try{
        const updatePayload  = req.body;
        const parsePayload  = updateTodo.safeParse(updatePayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"Not able to access Id",
            })
         }
        
       await todosModel.update({
         _id: req.body.id
       },{isComplete: true})

        const todo = await todosModel.findByIdAndUpdate(updatePayload.id, {
            title: updatePayload.title ,
            description: updatePayload.description,     
        });
        res.status(200).json({
            success: true,
            message: "Todo Edited"
        })
    }catch(error){
        console.log("edittodos: error: ",error);
    }
})
router.put('/updateTodo', async(req, res) =>{
    try{
        const updatePayload  = req.body;
        const parsePayload  = updateTodo.safeParse(updatePayload);
        if(!parsePayload.success){
            res.status(411).json({
             msg:"Not able to access Id",
            })
         }
        const todo = await todosModel.findByIdAndUpdate(updatePayload.id, {
            title: updatePayload.title ,
            description: updatePayload.description,     
        });
        res.status(200).json({
            success: true,
            message: "Todo Edited"
        })
    }catch(error){
        console.log("edittodos: error: ",error);
    }
})


export default router; 