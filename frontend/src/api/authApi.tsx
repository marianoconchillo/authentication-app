import axios from "axios";

const authApi = axios.create({
    baseURL: "https://authentication-app-brown.vercel.app/api",
});

export default authApi;
