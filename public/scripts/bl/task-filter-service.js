export class TaskFilterService {
    constructor(taskFilterStorage) {
        this.storage = taskFilterStorage;
        this.showCompletedTasks = false;
    }

    loadData() {
        this.showCompletedTasks = this.storage.getAll();
        return this.showCompletedTasks;
    }

    saveData(showCompletedTasks) {
        this.showCompletedTasks = showCompletedTasks;
        this.storage.update(this.showCompletedTasks);
    }
}