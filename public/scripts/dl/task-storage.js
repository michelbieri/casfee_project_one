export class TaskStorage {
    constructor() {
        const tasks = JSON.parse(localStorage.getItem('taskStorage') || "[ ]");
        this.tasks = tasks;
        localStorage.setItem('taskStorage', JSON.stringify(tasks));
    }

    getAll() {
        return this.tasks;
    }

    update(tasks) {
        localStorage.setItem('taskStorage', JSON.stringify(tasks));
        this.tasks = tasks;
        return this.tasks;
    }
}