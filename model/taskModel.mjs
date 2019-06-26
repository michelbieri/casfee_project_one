export class Task {
    constructor (title, description, priority, dateDue, dateCreated, completed, dateCompleted, id=null) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dateDue = dateDue;
        this.dateCreated = dateCreated;
        this.completed = completed;
        this.dateCompleted = dateCompleted;
    }
}