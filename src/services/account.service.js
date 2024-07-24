import axios from "axios"; 

const loginService = async ({ username, password }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/accounts/login`, {
            username: username,
            password: password
        });

        if (response.data.token) {
            localStorage.setItem(`currentUser`, JSON.stringify(response.data));
 
            // Cookies.set("user", response.data.accessToken);
        }

        return response; 
    } catch (error) {
        return { error: error.response.data.message };
    }
} 

const logout = () => {
    //Cookies.remove('token');
    localStorage.removeItem(`currentUser`); 
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(`currentUser`)); 
};

const accountService = { 
    loginService, 
    logout,
    getCurrentUser
};

export default accountService;