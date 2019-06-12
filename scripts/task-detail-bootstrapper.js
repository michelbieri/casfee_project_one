import {TaskStorage} from "./dl/task-storage.js";
import {TaskService} from "./bl/task-service.js";
import {TaskDetailController} from "./ui/task-detail-controller.js";

class TaskDetailBootstrapper {
    static start() {
        const taskStorage = new TaskStorage();
        const taskService = new TaskService(taskStorage);
        new TaskDetailController(taskService).taskDetailAction();
    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', TaskDetailBootstrapper.start);