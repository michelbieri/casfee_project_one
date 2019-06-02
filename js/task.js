"use strict";

class Task {


    constructor (id, title, description, priority, dateDue) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._dateDue = dateDue;
        this._dateCreated = new Date();
        //this._finished = false;
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

    get finished() {
        return this._finished;
    }

    toString () {
        //return `${this.title} | ${this.description}g P :: ${this.priority}g C :: ${this.dateDue}g F`
    }

    print () {
        console.log( this.toString() );
    }
}