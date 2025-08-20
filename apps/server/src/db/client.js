import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let client;
let db;

export const getCollection = (name) => db.collection(name);

export const connectDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(process.env.MONGO_URL);
      await client.connect();
      db = client.db(process.env.DB_NAME);
      console.log(`Connected to DB '${process.env.DB_NAME}'`);
    }
    return client;
  } catch (error) {
    console.error('Error connected to DB');
  }
};

export const getClient = async () => {
  if (!client) {
    console.error('Database not connect yet');
  }
  return client;
};
