import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export default {
    login(user) {
        return axios.post(`${API_URL}/login`, user);
    },
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    },
};