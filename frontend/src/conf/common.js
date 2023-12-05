<<<<<<< HEAD
import { axiosCall } from './axios.js'
=======
>>>>>>> 9af6f5ec5b853f2639df7ebe8fdbccbe30076e8e
import { toast } from 'react-toastify'
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null;
}

function logoutEntirely() {
    toast.success('Logged out successfully', { toastId: 999 })
    localStorage.clear()
<<<<<<< HEAD
    // try {
    //     const data = {
    //         "refresh": localStorage.getItem(REFRESH_TOKEN_KEY)
    //     }
    //     axiosCall("api/token/blacklist/", data, null, "POST")
        
    // } catch (e) {
    //     console.error(e)
    //     toast.error('Error during logout', { toastId: 999 })
    // }
=======
>>>>>>> 9af6f5ec5b853f2639df7ebe8fdbccbe30076e8e
}        

export {
    logoutEntirely,
    isLoggedIn,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}