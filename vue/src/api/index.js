import axios from 'axios';

const axiosCall = axios.create({
    baseURL: process.env.VUE_APP_API_URL,   //'http://localhost:9090',
});

function registUser(userData) {
    const url = "/registUser";
    return axios.post(url, userData);
}

function login(userData) {
    const url = "/login";
    return axios.post(url, userData);
}
export { registUser, login };