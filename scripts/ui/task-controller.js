export class TaskController {
    constructor(taskService) {
        this.taskService = taskService;

        this.taskContainer = document.getElementById("task-container");
        const templateSource = document.getElementById("entry-template").innerHTML;
        this.taskTemplateCompiled = Handlebars.compile(templateSource)
    }

    showTasks() {
        this.taskContainer.innerHTML = this.taskTemplateCompiled({task: this.taskService.tasks});
    }

    initEventHandlers() {

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