import axios from "axios";

const api = axios.create({
  baseURL: "https://geotech-backend.onrender.com/api",
});

export default api;
