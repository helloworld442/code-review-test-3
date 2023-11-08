import axios from "axios";

const instance = axios.create({
  baseURL: "https://ananbada.store:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  //   baseURL: "http://localhost:3001",
});

instance.interceptors.request.use(
  (config) => {
    console.log("[DEBUG] request: " + config);
    return config;
  },
  (error) => {
    console.log("[DEBUG] request error : ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("[DEBUG] response error : ", error);
    return Promise.reject(error);
  }
);

export default instance;
