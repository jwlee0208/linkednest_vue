import axios from "axios";

export const axiosCall = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

axiosCall.interceptors.request.use((config) => 
    {
        config.headers['Access-Control-Allow_Header'] = '*';
        return config;
    }
)

export default axiosCall;