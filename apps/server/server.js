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
      res.status(200).send({ success: true, message: 'Fetch apps', data: { apps }, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  app.post('/api/create-app', async (req, res) => {
    try {
      const app = req.body.app;
      await appsColl.insertOne(app);
      res.status(200).send({ success: true, message: `App ${app.appName} created!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  app.delete('/api/remove-app/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const name = req.body.appName;
      await appsColl.deleteOne({ _id: id });
      res.status(200).send({ success: true, message: `App '${name}' deleted!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  //======================================================================tasks=====================================================

  app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await tasksColl.find({}).toArray();
      res.status(200).send({ success: true, message: `Fetch tasks`, data: { tasks }, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  app.post('/api/create-task', async (req, res) => {
    try {
      const task = req.body.task;
      await tasksColl.insertOne(task);
      res.send({ success: true, message: `Task ${task.taskName} created!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  app.delete('/api/remove-task/:id', async (req, res) => {
    try {
      const id = new ObjectId(req.params.id);
      const name = req.body.taskName;
      await tasksColl.deleteOne({ _id: id });
      res.status(200).send({ success: true, message: `Task '${name}' deleted!`, data: null, meta: null, error: null });
    } catch (e) {
      res.status(500).send({ success: false, error: e.message });
    }
  });

  app.listen(PORT, () => console.log(`Server listen ${PORT}`));
};

start();
