import {Task} from "../model/taskModel.mjs";

export class TaskStore {
    constructor(database) {
        this.database = database;
    }

    async loadAll() {
        return await this.database.find({});
    }

    async saveTask(request) {
        let task = new Task(
            request.body.title,
            request.body.description,
            request.body.priority,
            request.body.dateDue,
            request.body.dateCreated,
            request.body.completed,
            request.body.dateCompleted,
            request.body._id
            );
        return await this.database.insert(task);
    }

    async updateTask(request) {
        return await this.database.update({ _id: request.params.id }, request.body, {});
    }

    async loadTaskById(id) {
        return await this.database.findOne({ _id: id });
    }

}