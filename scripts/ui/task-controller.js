export class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
        this.themeSelector = document.getElementById("theme-select");
        this.createTaskButton = document.getElementById("create-task-button");
        this.taskContainer = document.getElementById("task-container");
        this.sortGroup = document.getElementById("sort-group");
        this.taskTemplateCompiled = Handlebars.compile(document.getElementById("entry-template").innerHTML)
    }

    showTasks() {
        this.taskContainer.innerHTML = this.taskTemplateCompiled({task: this.taskService.tasks});
    }

    initEventHandlers() {
        this.themeSelector.addEventListener('change', (event) => {
            event.preventDefault();
            document.documentElement.setAttribute('data-theme', this.themeSelector.value);
        });

        this.createTaskButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.replace("detail.html");
        });

        this.taskContainer.addEventListener("click", (event) => {
            event.preventDefault();
            if (event.target.dataset.taskId !== undefined) {
                window.location.replace("detail.html?id=" + event.target.dataset.taskId);
            }
        });

        this.sortGroup.addEventListener("click", (event) => {
            event.preventDefault();
            this.sortGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
            this.taskService.orderBy(event.target.id);
            this.renderTasksView();
        });
    }

    renderTasksView() {
        this.showTasks();
    }

    taskAction() {
        this.initEventHandlers();
        this.taskService.loadData();
        this.taskService.orderBy('dateDue');
        this.renderTasksView();
    }
}