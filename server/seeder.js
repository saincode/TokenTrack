/**
 * ADMIN SEEDER — Run once to create the single admin account
 * Usage: node seeder.js
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/userModel');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Check if admin already exists
    const existing = await User.findOne({ email: 'admin@tokentrack.com' });
    if (existing) {
      console.log('⚠️  Admin already exists. Skipping seed.');
      process.exit(0);
    }

    // Create admin — password is hashed automatically by userModel pre-save hook
    const admin = await User.create({
      name: 'TokenTrack Admin',
      email: 'admin@tokentrack.com',
      password: 'Admin@1234',   // ← Change this to a strong password
      role: 'admin',
    });

    console.log(`
✅ Admin created successfully!
─────────────────────────────
📧 Email    : ${admin.email}
🔑 Password : Admin@1234
🛡️  Role     : ${admin.role}
─────────────────────────────
⚠️  Please change the password after first login.
    `);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeder Error:', error.message);
    process.exit(1);
  }
};

seedAdmin();
