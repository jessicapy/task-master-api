// src/models/Task.js
class Task {
    constructor(id, title, description, status = 'pending') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = new Date();
    }
}

module.exports = Task;