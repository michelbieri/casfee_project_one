export class TaskStorage {
    constructor() {
        const task = JSON.parse(localStorage.getItem('taskStorage') || "[ ]");
        this.task = task;
        localStorage.setItem('taskStorage', JSON.stringify(task));
    }

    getAll() {
        return this.task;
    }

    update(task) {
        localStorage.setItem('taskStorage', JSON.stringify(task));
        return task;
    }
}