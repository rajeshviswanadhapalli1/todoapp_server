import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes';


const app = express();
const PORT = process.env.PORT || 8000;

const DB_URI = 'mongodb+srv://rajesh:E4dc7kd7pGcJrTR@cluster0.bfixr1o.mongodb.net/todoapp?retryWrites=true&w=majority';
// const DB_URI = 'mongodb+srv://rajesh:Rajesh%401246@cluster0.bfixr1o.mongodb.net/';



app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/todos', todoRoutes);