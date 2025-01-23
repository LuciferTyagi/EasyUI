
import connectDB from "./src/db/index.js";
import express from 'express';
import cors from 'cors';
import categoryRoutes from './src/routes/CategoryRoutes.js'; // Import the category route
import itemRoutes from './src/routes/ItemRoutes.js';


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
