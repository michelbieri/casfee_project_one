export class TaskDetailController {
    constructor(taskService, themeService) {
        this.taskService = taskService;
        this.themeService = themeService;
        this.taskEditTemplateCompiled = Handlebars.compile(document.getElementById('task-detail-template').innerHTML);
        this.taskDetailContainer = document.getElementById('task-detail-container');
    }

    initEventHandlers() {
        this.taskDetailContainer.addEventListener('submit', (event) => {
            event.preventDefault();
            let taskObject = Object.fromEntries(new FormData(event.target));
            this.taskService.saveTask(taskObject);
            this.taskService.saveData();
            this.showIndexPage();
        });

        this.taskDetailContainer.addEventListener('reset', (event) => {
            this.showIndexPage();
        });
    }

    showTask() {
        this.taskDetailContainer.innerHTML = this.taskEditTemplateCompiled({task: this.taskService.task});
    }

    renderEditTaskView() {
        this.showTask();
    }

    initData(){
        this.taskService.loadData();
        const urlParam = window.location.search.substr(1);
        if(urlParam){
            this.taskService.getTask(Number(urlParam.split("=")[1]));
        } else {
            this.taskService.initNewTask();
        }
    }

    showIndexPage(event){
        window.location.replace("index.html");
    }

    loadTheme() {
        const theme = this.themeService.loadData();
        document.documentElement.setAttribute('data-theme', theme);
    }

    taskDetailAction() {
        this.initEventHandlers();
        this.initData();
        this.loadTheme();
        this.renderEditTaskView();
    }

}