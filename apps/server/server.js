import express from 'express';
import cors from 'cors';
import { connectDB } from './src/db/client.js';
import { router } from './src/routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

const start = async () => {
  try {
    await connectDB();
    app.listen(3000, () => console.log('Server works at port 3000'));
  } catch (error) {
    console.error('Error starting server');
  }
};

start();
