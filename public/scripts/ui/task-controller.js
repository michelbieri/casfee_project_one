export class TaskController {
    constructor(taskService , taskFilterService, themeService) {
        this.taskService = taskService;
        this.taskFilterService = taskFilterService;
        this.themeService = themeService;
        this.themeSelector = document.getElementById('theme-select');
        this.createTaskButton = document.getElementById('create-task-button');
        this.taskContainer = document.getElementById('task-container');
        this.sortGroup = document.getElementById('sort-group');
        this.filterGroup = document.getElementById('filter-group');
        this.taskTemplateCompiled = Handlebars.compile(document.getElementById('entry-template').innerHTML)
    }

    renderTasks() {
        this.taskContainer.innerHTML = this.taskTemplateCompiled({task: this.taskService.tasks});
    }

    initEventHandlers() {
        this.themeSelector.addEventListener('change', (event) => {
            event.preventDefault();
            document.documentElement.setAttribute('data-theme', this.themeSelector.value);
            this.themeService.saveData(this.themeSelector.value);
        });

        this.createTaskButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.replace('detail.html');
        });

        this.taskContainer.addEventListener('click', (event) => {
            event.preventDefault();
            const taskId = event.target.dataset.taskId;
            if (taskId !== undefined) {
                if (event.target.type === 'button') {
                    window.location = 'detail.html?id=' + taskId;
                } else if (event.target.id === 'checkbox') {
                    this.taskService.completeTask(taskId);
                    this.loadTaskFilter();
                }
            }
        });

        this.sortGroup.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.sortGroup.querySelector('.is-checked')) {
                this.sortGroup.querySelector('.is-checked').classList.remove('is-checked');
            }
            event.target.classList.add('is-checked');
            this.taskService.orderBy(event.target.id);
            this.renderTasks();
        });

        this.filterGroup.addEventListener("click", async (event) =>  {
            event.preventDefault();
            event.target.classList.toggle('is-checked');
            const showCompleted = event.target.classList.contains('is-checked');
            await this.filterTasks(event.target.id, showCompleted);
        });
    }

    async filterTasks(value, condition) {
        const buttonShowCompleted = document.getElementById('completed');
        await this.taskService.filter(value, condition);
        this.taskFilterService.saveData(condition);
        const checked = 'is-checked';
        if ((condition && !buttonShowCompleted.classList.contains(checked)) ||
            (!condition && buttonShowCompleted.classList.contains(checked))) {
            buttonShowCompleted.classList.toggle(checked);
        }
        this.renderTasks();
    }

    loadTaskFilter() {
        const showCompleted = this.taskFilterService.loadData();
        this.filterTasks('completed', showCompleted);
    }


    loadTheme() {
        const theme = this.themeService.loadData();
        this.themeSelector.value = theme;
        document.documentElement.setAttribute('data-theme', theme);
    }

    async taskAction() {
        this.initEventHandlers();
        await this.taskService.loadData();
        await this.taskService.orderBy('dateDue');
        this.loadTaskFilter();
        this.loadTheme();
        this.renderTasks();
    }
}