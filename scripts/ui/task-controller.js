export class TaskController {

    constructor(taskService , taskFilterService, themeService) {
        this.taskService = taskService;
        this.taskFilterService = taskFilterService;
        this.themeService = themeService;
        this.themeSelector = document.getElementById("theme-select");
        this.createTaskButton = document.getElementById("create-task-button");
        this.taskContainer = document.getElementById("task-container");
        this.sortGroup = document.getElementById("sort-group");
        this.filterGroup = document.getElementById("filter-group");
        this.taskTemplateCompiled = Handlebars.compile(document.getElementById("entry-template").innerHTML)
    }

    showTasks() {
        this.taskContainer.innerHTML = this.taskTemplateCompiled({task: this.taskService.tasks});
    }

    initEventHandlers() {
        this.themeSelector.addEventListener('change', (event) => {
            event.preventDefault();
            document.documentElement.setAttribute('data-theme', this.themeSelector.value);
            this.themeService.saveData(this.themeSelector.value);
        });

        this.createTaskButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.replace("detail.html");
        });

        this.taskContainer.addEventListener("click", (event) => {
            event.preventDefault();
            const taskId = event.target.dataset.taskId;
            if (taskId !== undefined) {
                if (event.target.type === "button") {
                    window.location = "detail.html?id=" + taskId;
                } else if (event.target.type === "checkbox") {
                    this.taskService.completeTask(taskId);
                    this.renderTasksView();
                }
            }

        });

        this.sortGroup.addEventListener("click", (event) => {
            event.preventDefault();
            this.sortGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
            this.taskService.orderBy(event.target.id);
            this.renderTasksView();
        });

        this.filterGroup.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.classList.toggle('is-checked');
            const showCompleted = event.target.classList.contains('is-checked');
            this.taskService.filter(event.target.id, showCompleted);
            this.taskFilterService.saveData(showCompleted);
            this.renderTasksView();
        });
    }

    loadTaskFilter() {
        const showCompleted = this.taskFilterService.loadData();
        const buttonShowCompleted = document.getElementById("completed");
        this.taskService.filter('completed', showCompleted);
        if ((showCompleted && !buttonShowCompleted.classList.contains('is-checked')) ||
            (!showCompleted && buttonShowCompleted.classList.contains('is-checked'))) {
            buttonShowCompleted.classList.toggle('is-checked');
        }
    }

    loadTheme() {
        const theme = this.themeService.loadData();
        this.themeSelector.value = theme;
        document.documentElement.setAttribute('data-theme', theme);
    }

    renderTasksView() {
        this.showTasks();
    }

    taskAction() {
        this.initEventHandlers();
        this.taskService.loadData();
        this.taskService.orderBy('dateDue');
        this.loadTaskFilter();
        this.loadTheme();
        this.renderTasksView();
    }
}