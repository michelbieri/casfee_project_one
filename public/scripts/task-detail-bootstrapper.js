import {TaskService} from "./bl/task-service.js";
import {TaskDetailController} from "./ui/task-detail-controller.js";
import {ThemeStorage} from "./dl/theme-storage.js";
import {ThemeService} from "./bl/theme-service.js";

class TaskDetailBootstrapper {
    static start() {
        const taskService = new TaskService();
        const themeStorage = new ThemeStorage();
        const themeService = new ThemeService(themeStorage);
        new TaskDetailController(taskService, themeService).taskDetailAction();
    }
}

document.addEventListener('DOMContentLoaded', TaskDetailBootstrapper.start);