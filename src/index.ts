import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import { PORT, DATABASE_URL } from './config';

dotenv.config();

console.log(DATABASE_URL);

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(`Connected to MongoDB Database`);

    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error('Error connecting to MongoDB:', error);
  });
