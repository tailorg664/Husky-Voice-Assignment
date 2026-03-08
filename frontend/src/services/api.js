import axios from "axios";

const envApiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const getApiBaseUrl = () => {
  const baseUrl = envApiBaseUrl.trim();
  return baseUrl.replace(/\/+$/, "");
};

const api = axios.create({
  baseURL: getApiBaseUrl(),
});

export default api;
