// lib/api.ts

import axios from "axios";

const api = axios.create({
  baseURL: "https://encurtadorlinkback-pvvz.onrender.com",
});

export default api;
