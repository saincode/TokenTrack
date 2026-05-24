const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// ─────────────────────────────────────────
// @desc    Login Admin
// @route   POST /api/auth/login
// @access  Public
// ─────────────────────────────────────────
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password');
  }

  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  // Only allow admin login on this route
  if (user.role !== 'admin') {
    res.status(403);
    throw new Error('Access denied — Admin only');
  }

  // Check password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  // Success — return user info + token
  res.json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    },
  });
});

// ─────────────────────────────────────────
// @desc    Get current logged-in admin
// @route   GET /api/auth/me
// @access  Private (requires JWT)
// ─────────────────────────────────────────
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json({
    success: true,
    data: user,
  });
});

module.exports = { loginAdmin, getMe };
