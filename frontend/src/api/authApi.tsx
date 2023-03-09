import axios from "axios";

const authApi = axios.create({
    baseURL: "https://authentication-app-brown.vercel.app/api",
    // baseURL: "http://localhost:5000/api",
});

export default authApi;
