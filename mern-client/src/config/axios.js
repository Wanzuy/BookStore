import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://bookstore-h678.onrender.com/api";
export default axios;
