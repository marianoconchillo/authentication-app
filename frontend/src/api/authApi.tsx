import axios from "axios";

const authApi = axios.create({
    baseURL: "https://authentication-app-production-88e8.up.railway.app/api",
});

export default authApi;
