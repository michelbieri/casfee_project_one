import {Task} from "./task.js";

export class TaskService {
    constructor(taskStorage) {
        this.storage = taskStorage;
        this.tasks = [];
    }

    loadData() {
        this.tasks = this.storage.getAll();

        if (this.tasks.length == 0) {
            this.tasks.push(new Task(0, "Sample Task", "Initial sample Task", 2, new Date()));
            this.saveData();
        }
    }

    saveData() {
        this.storage.update(this.tasks.map(f => f.toJSON()));
    }

    orderBy() {
        //ToDo: Implement oder by
    }
}