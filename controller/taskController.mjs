export class TaskController {
    constructor(taskStore) {
        this.taskStore = taskStore;
    }

    async getAllTasks(req, res) {
        res.json(await this.taskStore.loadAll());
    }

    async saveTask(req, res) {
        res.json(await this.taskStore.saveTask(req));
    }

    async updateTask(req, res) {
        res.json(await this.taskStore.updateTask(req));
    }

    async getTaskById(req, res) {
        res.json(await this.taskStore.loadTaskById(req.params.id));
    }
}