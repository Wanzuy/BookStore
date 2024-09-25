import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://172.172.9.154:5000/api";
export default axios;
