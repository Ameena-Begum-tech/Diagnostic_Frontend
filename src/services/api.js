// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://diagnostic-portal.onrender.com/api",
  withCredentials: true,
});

export default api;
