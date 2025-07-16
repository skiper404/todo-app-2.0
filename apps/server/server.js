import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server work');
});

app.listen(PORT, () => console.log(`Server listen ${PORT}`));
