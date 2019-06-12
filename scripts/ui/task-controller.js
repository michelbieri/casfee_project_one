export class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
        this.themeSelector = document.getElementById("theme-select");
        this.createTaskButton = document.getElementById("create-task-button");
        this.taskContainer = document.getElementById("task-container");
        this.taskTemplateCompiled = Handlebars.compile(document.getElementById("entry-template").innerHTML)
    }

    showTasks() {
        this.taskContainer.innerHTML = this.taskTemplateCompiled({task: this.taskService.tasks});
    }

    initEventHandlers() {
        this.themeSelector.addEventListener('change', (event) => {
            document.documentElement.setAttribute('data-theme', this.themeSelector.value);
        });

        this.createTaskButton.addEventListener("click", (event) => {
            window.location.replace("detail.html");
        });

        this.taskContainer.addEventListener("click", (event) => {
            window.location.replace("detail.html?id=" + event.target.dataset.taskId);
        });
    }

    renderTasksView() {
        this.showTasks();
    }

    taskAction() {
        this.initEventHandlers();
        this.taskService.loadData();
        this.renderTasksView();
    }
}