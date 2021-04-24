import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:7000',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default api;