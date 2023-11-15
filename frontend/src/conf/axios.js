import axios from 'axios';
import { BASE_URL } from './store.js';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './common.js';

async function accessTokenIsValid() {
try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    let response = await axiosCall(
        "api/token/verify",
        {token:accessToken},
        null, "POST"
    )
    console.log(response);
    }catch (e) {
    console.error("Invalid access token detected: ", e)
    return false;
}
}
async function refreshTokenLS(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
}

async function axiosCall(path, data = null, headersData = null, method = "GET") {
    try {
        const url = BASE_URL + path
        const headers = { 'Content-Type': 'application/json', ...headersData }
        const response = await axios({
            method,
            url,
            data,
            headers,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(`Error in axiosCall`);
        console.error(error);
    }
}

export {
    axiosCall,
    accessTokenIsValid,
    refreshTokenLS
}