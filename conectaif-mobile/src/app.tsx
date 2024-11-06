import axios from "axios";

const api = axios.create({
  baseURL: "http://172.30.153.68:3335/",
  headers: {"x-app-origin":"conectaif-mobile-app"}
});

export default api;
