// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRouter');
const contactRouter = require('./routes/contactRouter');
const orderRoutes = require('./routes/orderRoutes')
const sliderRoutes = require('./routes/sliderRoutes');
const categoryRoutes = require('./routes/categoryRoutes')
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/', authRoutes);
app.use('/', express.static('./uploads'));
app.use('/product', productRoutes);
app.use('/reviews', reviewRouter);
app.use('/contacts', contactRouter);
app.use('/order', orderRoutes);
app.use('/slider', sliderRoutes);
app.use('/categories', categoryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
