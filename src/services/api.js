import axios from 'axios';

// Base URL for all API calls
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Automatically attach JWT token to every request if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Auth ──
export const loginAdmin = (credentials) => API.post('/auth/login', credentials);
export const getMe = () => API.get('/auth/me');

export default API;
