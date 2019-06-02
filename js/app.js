const container = document.getElementById("tasks");
const templateSource = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(templateSource);

let tasks = [];

function renderTasks() {
    container.innerHTML = template(tasks);
}

function init() {
    for (let i = 1; i < 6; i++) {
        let task = new Task(i,"Title " + i, "Beschreibung", i, new Date());
        task.finished = i%2 == 0;
        tasks.push(task)
    }
    renderTasks();
}



init();