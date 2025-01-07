// src/data/taskStore.js
let tasks = [];

const taskStore = {
    getTasks: () => tasks,
    addTask: (task) => {
        tasks.push(task);
        return task;
    }
};

module.exports = taskStore;