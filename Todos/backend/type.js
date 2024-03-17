import z, { string } from  'zod';

const  createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const  updateTodo = z.object({
    id: z.string(),
    title:  z.string(),
    description: z.string().optional()
})

const deleteTodo = z.object({
    id: z.string()
})

module.exports = {
    createTodo,
    updateTodo
}