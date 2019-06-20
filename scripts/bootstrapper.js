import {TaskStorage} from "./dl/task-storage.js";
import {TaskController} from "./ui/task-controller.js";
import {TaskService} from "./bl/task-service.js";
import {TaskFilterStorage} from "./dl/task-filter-storage.js";
import {TaskFilterService} from "./bl/task-filter-service.js";

class Bootstrapper {
    static start() {
        const taskStorage = new TaskStorage();
        const taskService = new TaskService(taskStorage);
        const taskFilterStorage = new TaskFilterStorage();
        const taskFilterService = new TaskFilterService(taskFilterStorage);
        new TaskController(taskService, taskFilterService).taskAction();

    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', Bootstrapper.start);