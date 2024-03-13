import express from "express";
// import { addTodos, editTodos, getTodos, deleteTodos } from "../controllers/todosControllers";

const router = express.Router();


router.post('/addtodos', async(req, res) =>{
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
})

router.put('/edittodos', async(req, res) =>{
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
})


export default router; 