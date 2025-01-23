import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'; // Import the category routes
import itemRoutes from './routes/itemRoutes.js'; // Import the item routes
dotenv.config({
  path: "./env",
});

const app = express();
app.use(cors());
app.use(express.json());
connectDB();


app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/categories', categoryRoutes);
app.use('/api/items', itemRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));