"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Fechted all Tasks',
        todos: todos
    });
});
router.post('/newTodo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    return res.status(201).json({ message: 'New Todo Added successfully',
        newTodo: newTodo });
});
router.put('/updateTodo/:todoId', (req, res, next) => {
    const body = req.body;
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex > -1) {
        todos[todoIndex].text = body.text;
        return res.status(200).json({ message: 'Successfully Altered Todo Task', todos: todos });
    }
    return res.status(404).json({ message: 'Invalid ID for Todo Task' });
});
router.delete('/deleteTodo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== tid);
    res.status(200).json({ message: 'Deleted Todo Task', todos: todos });
});
exports.default = router;
