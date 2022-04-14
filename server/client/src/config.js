import axios from "axios";
export const axiosInstance = axios.create({
    baseURL : "https://b00ksapp.herokuapp.com"
});
