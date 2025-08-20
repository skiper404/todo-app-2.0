import { ObjectId } from 'mongodb';
import { getCollection } from '../db/client.js';

export const getAppsHandle = async (req, res) => {
  const coll = getCollection('apps');
  const apps = await coll.find({}).toArray();
  res.status(200).json({ message: 'Fetch apps from server', apps });
};

export const createAppHandler = async (req, res) => {
  const coll = getCollection('apps');
  const { appName, appType } = req.body;
  await coll.insertOne({ appName, appType });
  res.status(201).json({ message: `App '${appName}' sucsessfully insert` });
};

export const updateAppHandler = async (req, res) => {
  const coll = getCollection('apps');
  const _id = new ObjectId(req.params.appId);
  const changes = req.body;
  await coll.updateOne({ _id }, { $set: changes });
  res.status(201).json({ message: 'App updated' });
};

export const removeAppHandler = async (req, res) => {
  const coll = getCollection('apps');
  const _id = new ObjectId(req.params.appId);
  await coll.deleteOne({ _id });
  res.status(201).json({ message: 'App deleted' });
};
