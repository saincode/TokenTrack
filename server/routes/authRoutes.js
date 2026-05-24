const express = require('express');
const router = express.Router();
const { loginAdmin, getMe } = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// POST /api/auth/login  → Admin login
router.post('/login', loginAdmin);

// GET  /api/auth/me     → Get logged-in admin (protected)
router.get('/me', protect, adminOnly, getMe);

module.exports = router;
