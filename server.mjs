import Datastore from 'nedb-promise';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { TaskStore } from './services/taskStore.mjs';
import { TaskController } from './controller/taskController.mjs';
import { TaskRoutes } from './routes/taskRoutes.mjs';

const database = new Datastore({ filename: './data/tasks.db', autoload: true });
const taskStore = new TaskStore(database);
const taskController = new TaskController(taskStore);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

const taskRoutes = new TaskRoutes(app, taskController);

app.listen(port);

console.log(`Server listen on Port ${port}`);
