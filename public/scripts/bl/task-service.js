import {Task} from "./task.js";
import {httpService} from "./http-service.js";

export class TaskService {
    constructor() {
        this.url = 'http://localhost:8080/v1/tasks';
        this.tasks = [];
        this.task = null;
    }

    async loadData() {
        const data = await httpService.ajax("GET", this.url, undefined);
        this.tasks = data.map(t => new Task(t._id, t.title, t.description, t.priority, t.dateDue, t.completed, t.dateCompleted));
    }

    async getTask(id) {
        this.task = await httpService.ajax("GET", `${this.url}/${id}`, undefined);
    }

    initNewTask() {
        this.task = new Task(null, "", "", 0, new Date());
    }

    async saveTask(formTask) {
        if (this.task._id == null) {
            this.task = new Task(this.tasks.length, formTask.title, formTask.description, formTask.priority, formTask.dateDue);
            this.tasks.push(this.task);
            await httpService.ajax("POST", this.url, this.task);
        } else {
            this.task = new Task(this.task._id, formTask.title, formTask.description, formTask.priority, formTask.dateDue, this.task.completed, this.task.dateCompleted);
            await httpService.ajax("PUT", `${this.url}/${this.task._id}`, this.task);
        }
    }

    async completeTask(taskId) {
        const foundIndex = this.tasks.findIndex(t => t._id == taskId);
        if (foundIndex !== -1) {
            this.task = this.tasks[foundIndex];
            this.task.completed = !this.task.completed;
            await this.saveTask(this.task);
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

    async filter(value, condition) {
        if (condition === false) {
            this.tasks = this.tasks.filter(t => t[value] == condition);
        } else {
            await this.loadData();
        }
    }
}