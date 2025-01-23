require("dotenv").config();
const connectDB = require("./src/db/index.js");
const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./src/routes/CategoryRoutes.js'); 
const itemRoutes = require('./src/routes/ItemRoutes.js'); 

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
