// src/controllers/taskController.js
const Task = require('../models/Task');
const taskStore = require('../data/taskStore');

const taskController = {
    getAllTasks: (req, res) => {
        const tasks = taskStore.getTasks();
        res.json(tasks);
    },
    createTask: (req, res) => {
        // Implementation pending
        res.status(501).json({ message: 'Not implemented yet' });
    }
};

module.exports = taskController;