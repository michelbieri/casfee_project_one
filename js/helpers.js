Handlebars.registerHelper("checkedIf", function (condition, value) {
    return (condition == value) ? "checked" : "";
});

Handlebars.registerHelper("renderPriority", function(icon, priority){
    return icon.repeat(priority);
});

Handlebars.registerHelper('checkedRadio', function(obj, value){
    console.log('obj: ' + obj + '- value:' + value);
    console.log(obj == value);
    return obj == value ? ' checked' : '';
});