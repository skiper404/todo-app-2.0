import { Router } from 'express';
import { createTaskHandler, getTasksHandler, removeTaskHandler, updateTaskHandler } from '../controllers/tasks.controller.js';
import { createTaskValidator, getTasksValidator, removeTaskValidator, updateTaskValidator, validate } from '../validators/tasks.validator.js';

const tasksRouter = Router();

tasksRouter.get('/:appId/tasks', getTasksValidator, validate, getTasksHandler);
tasksRouter.post('/:appId/tasks', createTaskValidator, validate, createTaskHandler);
tasksRouter.patch('/tasks/:taskId', updateTaskValidator, validate, updateTaskHandler);
tasksRouter.delete('/tasks/:taskId', removeTaskValidator, validate, removeTaskHandler);

export { tasksRouter };
