Handlebars.registerHelper("checkedIf", function (condition, value) {
    return (condition == value) ? "checked" : "";
});

Handlebars.registerHelper('checkedRadio', function(obj, value){
    return obj == value ? ' checked' : '';
});