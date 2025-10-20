// lib/api.ts

import axios from "axios";

const api = axios.create({
  baseURL: "https://encurtadorlinkback-6txm.onrender.com",
});

export default api;
