// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
 // new route
router.get('/users',  authController.getAllUsers); 
router.get('/users/:token', authController.getUserByToken)

module.exports = router;
