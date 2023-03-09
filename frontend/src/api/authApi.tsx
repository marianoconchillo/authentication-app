import axios from "axios";

const authApi = axios.create({
    baseURL: "https://authentication-app-production-b8f5.up.railway.app/api/",
    // baseURL: "http://localhost:5000/api",
});

export default authApi;
