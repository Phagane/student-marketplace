// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get user profile by ID
router.get('/:id', getUserProfile);

// Update user profile by ID
router.put('/:id', updateUserProfile);

module.exports = router;
