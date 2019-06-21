import {TaskStorage} from "./dl/task-storage.js";
import {TaskController} from "./ui/task-controller.js";
import {TaskService} from "./bl/task-service.js";
import {TaskFilterStorage} from "./dl/task-filter-storage.js";
import {TaskFilterService} from "./bl/task-filter-service.js";
import {ThemeStorage} from "./dl/theme-storage.js";
import {ThemeService} from "./bl/theme-service.js";

class Bootstrapper {
    static start() {
        const taskStorage = new TaskStorage();
        const taskService = new TaskService(taskStorage);
        const taskFilterStorage = new TaskFilterStorage();
        const taskFilterService = new TaskFilterService(taskFilterStorage);
        const themeStorage = new ThemeStorage();
        const themeService = new ThemeService(themeStorage);
        new TaskController(taskService, taskFilterService, themeService).taskAction();

    }
}

// wait until scripts have been loaded
document.addEventListener('DOMContentLoaded', Bootstrapper.start);