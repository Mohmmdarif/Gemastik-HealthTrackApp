import axios from 'axios';
import supabase from './supabase';

const api = axios.create({
  baseURL: supabaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${supabaseKey}`,
  },
});

export default api;