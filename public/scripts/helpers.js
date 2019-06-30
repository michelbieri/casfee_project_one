Handlebars.registerHelper('setChecked', function(obj, value){
    return obj == value ? 'checked' : '';
});

Handlebars.registerHelper('showDueOrCompleted', function(task){
    return task.completed ? task.dateCompletedFormatted : task.dateDueFormatted;
});