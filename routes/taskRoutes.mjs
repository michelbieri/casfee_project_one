export class TaskRoutes {
    constructor(app, taskController) {
        this.taskController = taskController;
        this.app = app;
        this.initRoutes();
    }

    initRoutes() {
        this.app
            .route('/v1/tasks/:id')
            .get(this.taskController.getTaskById.bind(this.taskController))
            .put(this.taskController.updateTask.bind(this.taskController));
        this.app
            .route('/v1/tasks')
            .get(this.taskController.getAllTasks.bind(this.taskController))
            .post(this.taskController.saveTask.bind(this.taskController));
    }
}