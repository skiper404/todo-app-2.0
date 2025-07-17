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
  } catch (error) {
    console.log('Error:', error.message);
  }

  app.get('/api/apps', async (req, res) => {
    try {
      const apps = await appsColl.find().toArray();
      res.send({ success: true, message: 'Fetch apps', data: { apps }, meta: null, error: null });
    } catch (error) {
      res.send({ success: false, error: error.messaage });
    }
  });

  app.post('/api/create-app', async (req, res) => {
    try {
      const appName = req.body.appName;
      await appsColl.insertOne({ name: appName });
      res.send({ success: true, message: `App ${appName} created!`, data: null, meta: null, error: null });
    } catch (error) {
      res.send({ success: false, error: error.messaage });
    }
  });

  app.delete('/api/delete-app/:appId', async (req, res) => {
    const appId = new ObjectId(req.params.appId);
    try {
      await appsColl.deleteOne({ _id: appId });
      res.send({ success: true, message: `App ${appId} deleted!`, data: null, meta: null, error: null });
    } catch (error) {
      res.send({ success: false, error: error.messaage });
    }
  });

  app.listen(PORT, () => console.log(`Server listen ${PORT}`));
};

start();
