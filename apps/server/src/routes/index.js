import { Router } from 'express';
import { appsRouter } from './apps.routes.js';
import { tasksRouter } from './tasks.routes.js';

const router = Router();

router.use('/', appsRouter);
router.use('/', tasksRouter);

export { router };
