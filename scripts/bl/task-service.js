import {Task} from "./task.js";

export class TaskService {
    constructor(taskStorage) {
        this.storage = taskStorage;
        this.tasks = [];
        this.task = null;
    }

    loadData() {
        this.tasks = this.storage.getAll().map(t => new Task(t.id, t.title, t.description, t.priority, t.dateDue));

        if (this.tasks.length == 0) {
            this.task = new Task(this.tasks.length, "Sample Task", "Initial sample Task", 2, new Date());
            this.tasks.push(this.task);
            this.saveData();
        }
    }

    saveData() {
        this.storage.update(this.tasks.map(f => f.toJSON()));
    }

    getTask(id) {
        this.task = this.tasks.find(t => t.id === id);
    }

    initNewTask() {
        this.task = new Task(NaN, "", "", 0, new Date());
    }

    saveTask(formTask) {
        let foundIndex = this.tasks.findIndex(t => t.id == this.task.id);
        if (foundIndex === -1) {
            this.task = new Task(this.tasks.length, formTask.title, formTask.description, formTask.priority, formTask.dateDue);
            this.tasks.push(this.task);
        } else {
            this.tasks[foundIndex] = new Task(this.task.id, formTask.title, formTask.description, formTask.priority, formTask.dateDue);
        }
    }

    orderBy(value) {
        switch (value) {
            case 'dateDue':
            case 'dateCompleted':
            case 'dateCreated':
                this.tasks = this.tasks.sort((a, b) => new Date(a[value]).getTime() - new Date(b[value]).getTime());
                break;
            case 'priority':
                this.tasks = this.tasks.sort((a, b) => parseInt(b[value]) - parseInt(a[value]));
                break;
        }
    }

    filter() {
        //ToDo: Implement completed filter
    }
}