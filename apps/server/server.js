import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);

const appsColl = client.db('todo').collection('apps');
const tasksColl = client.db('todo').collection('tasks');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const start = async () => {
  try {
    await client.connect();
  } catch (e) {
    console.log('Error:', e.message);
  }

  app.get('/api/apps', async (req, res) => {
    try {
      const apps = await appsColl.find().toArray();
      res.status(200).json({ success: true, message: 'Fetch apps', data: { apps }, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.post('/api/create-app', async (req, res) => {
    try {
      const app = req.body.app;
      await appsColl.insertOne(app);
      res.status(200).json({ success: true, message: `App ${app.appName} created!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.delete('/api/remove-app/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const name = req.body.appName;
      await appsColl.deleteOne({ _id: id });
      res.status(200).json({ success: true, message: `App '${name}' deleted!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  //======================================================================tasks=====================================================

  app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await tasksColl.find().toArray();
      res.status(200).json({ success: true, message: 'Fetch app tasks', data: { tasks }, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.get('/api/tasks/:appId', async (req, res) => {
    try {
      const appId = new ObjectId(req.params.appId);
      const tasks = await tasksColl.find({ appId: appId }).toArray();
      res.status(200).json({ success: true, message: `Fetch tasks`, data: { tasks }, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.post('/api/create-task', async (req, res) => {
    try {
      const task = req.body.task;
      const appId = new ObjectId(req.body.appId);
      await tasksColl.insertOne({ ...task, appId });
      res.json({ success: true, message: `Task ${task.taskName} created!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.delete('/api/remove-task/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const name = req.body.taskName;
      await tasksColl.deleteOne({ _id: id });
      res.status(200).json({ success: true, message: `Task '${name}' deleted!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.post('/api/update-app/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const { appName, appType } = req.body.app;
      await appsColl.findOneAndUpdate({ _id: id }, { $set: { appName, appType } });
      res.status(200).json({ success: true, message: `App ${appName} has updated!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.post('/api/update-task/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const { taskName, taskCategory, taskStatus, taskPriority } = req.body.task;
      await tasksColl.findOneAndUpdate({ _id: id }, { $set: { taskName, taskCategory, taskPriority, taskStatus } });
      res.status(200).json({ success: true, message: `Task ${taskName} has updated!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

  app.listen(PORT, () => console.log(`Server listen ${PORT}`));
};

start();
