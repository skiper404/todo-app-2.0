import { body, param, validationResult } from 'express-validator';

export const getTasksValidator = [param('appId').isMongoId().withMessage('Invalid appId')];

export const createTaskValidator = [
  param('appId').isMongoId().withMessage('Invalid appId'),
  body('taskName').notEmpty().withMessage('taskName is required create').isString(),
  body('taskCategory').notEmpty().withMessage('taskCategory is required create').isString(),
  body('taskPriority').notEmpty().withMessage('taskPriority is required create').isString(),
  body('taskStatus').notEmpty().withMessage('taskStatus is required create').isString(),
];

export const updateTaskValidator = [
  param('taskId').isMongoId().withMessage('Invalid taskId'),
  body('taskName').optional().isString(),
  body('taskCategory').optional().isString(),
  body('taskPriority').optional().isString(),
  body('taskStatus').optional().isString(),
];

export const removeTaskValidator = [param('taskId').isMongoId().withMessage('Invalid taskId')];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
};
