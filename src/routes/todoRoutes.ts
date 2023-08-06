import express from 'express';
import Todo, { ITodo } from '../models/Todo';


const router = express.Router();


router.get('/', async (req:any, res:any) => {
    try {
      const todos: ITodo[] = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching todos' });
    }
  });

  router.post('/', async (req:any, res:any) => {
    try {
      const todo: ITodo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false,
      });
      await todo.save();
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating todo' });
    }
  });

  router.put('/:id', async (req:any, res:any) => {
    try {
      const todo: ITodo | null = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating todo' });
    }
  });

  router.delete('/:id', async (req:any, res:any) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting todo' });
    }
  });
  
  export default router;