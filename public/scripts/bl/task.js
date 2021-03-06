export class Task {
    constructor (id, title, description, priority=0, dateDue, completed=false, dateCompleted=null) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._dateDue = dateDue;
        this._dateCreated = new Date();
        this._completed = completed;
        this._dateCompleted = dateCompleted;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get priority() {
        return this._priority;
    }

    get dateDue() {
        return this._dateDue;
    }

    get dateCreated() {
        return this._dateCreated;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
        if (value === true) {
            this._dateCompleted = new Date();
        } else {
            this._dateCompleted = null;
        }
    }

    get dateCompleted() {
        return this._dateCompleted;
    }

    get dateDueFormatted() {
        if (this._dateDue) {
            return moment(this._dateDue).format('DD.MM.YYYY');
        } else {
            return 'sometime';
        }
    }

    get dateCompletedFormatted() {
        if (this._dateCompleted) {
            return moment(this._dateCompleted).fromNow();
        }
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            priority: this.priority,
            dateDue: this.dateDue,
            dateCreated: this.dateCreated,
            dateCompleted: this.dateCompleted,
            completed: this.completed,
        };
    }
}