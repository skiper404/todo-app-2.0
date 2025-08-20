import { Router } from 'express';
import { createAppHandler, updateAppHandler, getAppsHandle, removeAppHandler } from '../controllers/apps.controller.js';
import { createAppValidator, getAppsValidator, removeAppValidator, updateAppValidator, validate } from '../validators/apps.validator.js';

const appsRouter = Router();

appsRouter.get('/apps', getAppsValidator, validate, getAppsHandle);
appsRouter.post('/apps', createAppValidator, validate, createAppHandler);
appsRouter.patch('/apps/:appId', updateAppValidator, validate, updateAppHandler);
appsRouter.delete('/apps/:appId', removeAppValidator, validate, removeAppHandler);

export { appsRouter };
