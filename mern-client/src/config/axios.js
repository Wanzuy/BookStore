import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/api";
export default axios;
