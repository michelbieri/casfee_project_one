import {TaskStorage} from "./dl/task-storage.js";
import {TaskController} from "./ui/task-controller.js";
import {TaskService} from "./bl/task-service.js";

class Bootstrapper {
    static start() {
        const taskStorage = new TaskStorage();
        const taskService = new TaskService(taskStorage);
        new TaskController(taskService).taskAction();
    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', Bootstrapper.start);