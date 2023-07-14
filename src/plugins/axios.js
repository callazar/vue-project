import axios from 'axios';

export const apiUrl = axios.create({
    baseURL: process.env.VUE_APP_GLOBAL_URL
})

