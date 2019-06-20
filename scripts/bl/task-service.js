import {Task} from "./task.js";

export class TaskService {
    constructor(taskStorage) {
        this.storage = taskStorage;
        this.tasks = [];
        this.task = null;
    }

    loadData() {
        this.tasks = this.storage.getAll().map(t => new Task(t.id, t.title, t.description, t.priority, t.dateDue, t.completed, t.dateCompleted));

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
        const foundIndex = this.tasks.findIndex(t => t.id == this.task.id);
        if (foundIndex === -1) {
            this.task = new Task(this.tasks.length, formTask.title, formTask.description, formTask.priority, formTask.dateDue);
            this.tasks.push(this.task);
        } else {
            this.tasks[foundIndex] = new Task(this.task.id, formTask.title, formTask.description, formTask.priority, formTask.dateDue, this.task.completed, this.task.dateCompleted);
        }
        this.saveData();
    }

    completeTask(taskId) {
        this.loadData();
        const foundIndex = this.tasks.findIndex(t => t.id == taskId);
        if (foundIndex !== -1) {
            this.tasks[foundIndex].completed = !this.tasks[foundIndex].completed;
            this.saveData();
        }
        this.filter('completed', false)

    }

    orderBy(value) {
        switch (value) {
            case 'dateDue':
            case 'dateCompleted':
            case 'dateCreated':
                this.tasks = this.tasks.sort((a, b) => new Date(b[value]).getTime() - new Date(a[value]).getTime());
                break;
            case 'priority':
                this.tasks = this.tasks.sort((a, b) => parseInt(b[value]) - parseInt(a[value]));
                break;
        }
    }

    filter(value, condition) {
        if (condition === true) {
            this.loadData();
        } else {
            this.tasks = this.tasks.filter(t => t[value] == condition);
        }

    }
}