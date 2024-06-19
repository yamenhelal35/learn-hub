// todolist/script.js
const express = require('express');
const Todo = require('./todolistSchema');

module.exports = ({ app }) => {
  const router = express.Router();

  router.use((req, res, next) => {
    req.user = { id: req.mongouserId }; // Extract user ID from the request object
    next();
  });

  // Get all todos for a user
  router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find({ userId: req.user.id });
      res.status(200).json(todos);
    } catch (err) {
      console.error('Error fetching todos:', err);  // Log detailed error
      res.status(500).json({ error: err.message });
    }
  });

  // Add a new todo
  router.post('/', async (req, res) => {
    try {
      const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        userId: req.user.id,
      });
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      console.error('Error adding todo:', err);  // Log detailed error
      res.status(500).json({ error: err.message });
    }
  });

  // Update a todo
  router.put('/:id', async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedTodo);
    } catch (err) {
      console.error('Error updating todo:', err);  // Log detailed error
      res.status(500).json({ error: err.message });
    }
  });

  // Delete a todo
  router.delete('/:id', async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (err) {
      console.error('Error deleting todo:', err);  // Log detailed error
      res.status(500).json({ error: err.message });
    }
  });

  app.use('/todos', router);
};
