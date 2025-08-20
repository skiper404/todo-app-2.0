import { ObjectId, ReturnDocument } from 'mongodb';
import { getCollection } from '../db/client.js';

export const getTasksHandler = async (req, res) => {
  const appId = new ObjectId(req.params.appId);
  const coll = getCollection('tasks');
  const tasks = await coll.find({ appId }).toArray();
  res.status(200).json({ message: "Fetched app's tasks", tasks });
};

export const createTaskHandler = async (req, res) => {
  const appId = new ObjectId(req.params.appId);
  const task = req.body;
  const coll = getCollection('tasks');
  await coll.insertOne({ appId, ...task, createdAt: Date.now(), updatedAt: null });
  res.status(200).json({ message: 'Task  created' });
};

export const removeTaskHandler = async (req, res) => {
  const _id = new ObjectId(req.params.taskId);
  const coll = getCollection('tasks');
  await coll.deleteOne({ _id });
  res.status(200).json({ message: 'Task removed' });
};

export const updateTaskHandler = async (req, res) => {
  const _id = new ObjectId(req.params.taskId);
  const changes = req.body;
  const coll = getCollection('tasks');
  await coll.updateOne({ _id }, { $set: { ...changes, updatedAt: Date.now() } });
  res.status(200).json({ message: 'Task updated' });
};
