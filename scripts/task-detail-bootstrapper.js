import {TaskStorage} from "./dl/task-storage.js";
import {TaskService} from "./bl/task-service.js";
import {TaskDetailController} from "./ui/task-detail-controller.js";
import {ThemeStorage} from "./dl/theme-storage.js";
import {ThemeService} from "./bl/theme-service.js";

class TaskDetailBootstrapper {
    static start() {
        const taskStorage = new TaskStorage();
        const taskService = new TaskService(taskStorage);
        const themeStorage = new ThemeStorage();
        const themeService = new ThemeService(themeStorage);
        new TaskDetailController(taskService, themeService).taskDetailAction();
    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', TaskDetailBootstrapper.start);