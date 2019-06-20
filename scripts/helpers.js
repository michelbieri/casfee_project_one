
Handlebars.registerHelper('setChecked', function(obj, value){
    return obj == value ? 'checked' : '';
});
