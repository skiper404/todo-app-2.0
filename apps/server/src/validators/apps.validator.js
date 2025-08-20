import { body, query, param, validationResult } from 'express-validator';

export const getAppsValidator = [query('type').optional().isString().withMessage('Type must be a string')];

export const createAppValidator = [
  body('appName').notEmpty().withMessage('appName is required').isString(),
  body('appType').notEmpty().withMessage('appType is required').isString(),
];

export const updateAppValidator = [
  param('appId').isMongoId().withMessage('Invalid appId'),
  body('appName').optional().isString(),
  body('appType').optional().isString(),
];

export const removeAppValidator = [param('appId').isMongoId().withMessage('Invalid appId')];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
};
