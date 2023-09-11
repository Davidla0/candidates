import Axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:8080/api/';

// Create an Axios instance with credentials
const axiosInstance = Axios.create({
    withCredentials: true,
});

// Function to set the Authorization header with the token
function setAuthorizationToken(token) {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}

// Initial setup to read the token from cookies
setAuthorizationToken(Cookies.get('token'));

// Update the token when it changes (e.g., during login)
function updateToken(token) {
    setAuthorizationToken(token);
}

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data);
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data);
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data);
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data);
    },
    updateToken, // Export the function to update the token
};

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axiosInstance({
            url: `${BASE_URL}${endpoint}/`,
            method,
            data,
            params: (method === 'GET') ? data : null,
        });
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            sessionStorage.clear();
            window.location.assign('/');
        }
        throw err;
    }
}
