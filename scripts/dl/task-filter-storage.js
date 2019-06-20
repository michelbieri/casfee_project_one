export class TaskFilterStorage {
    constructor() {
        const key = 'taskFilterStorage';
        const taskFilter = JSON.parse(localStorage.getItem(key)|| false );
        this.taskFilter = taskFilter;
        localStorage.setItem(key, JSON.stringify(taskFilter));
    }

    getAll() {
        return this.taskFilter;
    }

    update(taskFilter) {
        const key = 'taskFilterStorage';
        localStorage.setItem(key, JSON.stringify(taskFilter));
        this.taskFilter = taskFilter;
        return this.taskFilter;
    }


}