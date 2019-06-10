export class Task {

    constructor (id, title, description, priority, dateDue) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._dateDue = dateDue;
        this._dateCreated = new Date();
        this._completed = false;
        this._dateCompleted = null;
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
        return this._dateDue.toDateString();
    }

    get dateCreated() {
        return this._dateCreated.toDateString();;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
        this._dateCompleted = new Date();
    }

    get dateCompleted() {
        //return this._dateCompleted.toDateString();;
    }

    toString () {
        return `${this.title} | ${this.description}g P :: ${this.priority}g C :: ${this.dateDue}g F`;
    }

    print () {
        console.log( this.toString() );
    }

    toJSON() {
        return {
            id: this.id,
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