import axios from 'axios';
import supabase from './supabase';

const api = axios.create({
  baseURL: supabase.url,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${supabase.key}`,
  },
});


export default api;