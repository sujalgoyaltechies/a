// routes/authRoutes.js
const express = require('express');
const orderController = require('../controllers/orderController'); // Replace 'yourFileName' with the actual file name


const router = express.Router();


// Access the orderController functions like this
router.post('/create-order', orderController.createOrder);
router.get('/get-all-orders', orderController.getAllOrders);
router.get('/get-order/:orderId', orderController.getOrderById);
router.get('/user/:userId', orderController.getOrdersByUserId);
router.patch('/update-order-status/:orderId', orderController.updateOrderStatus);

module.exports = router;
