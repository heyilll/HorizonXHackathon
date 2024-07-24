import axios from "axios";
import authHeader from "./authHeader"; 

const getLLMsService = async () => {  
    try { 
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/models/all` );
        return response.data;
    } catch (e) {
        return e;
    }
}

const getSpecificLLMService = async (id) => {  
    try { 
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/models/${id}` );
        return response.data;
    } catch (e) {
        return e;
    }
}

const addLLMService = async (data ) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/models`, data,  { headers: authHeader() });
        return response;
    } catch (e) {
        return e;
    }
}

const removeLLMService = async (id) => { 
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, { headers: authHeader() });
        return response;
    } catch (e) {
        return e;
    }
}

const editLLMService = async (id, updateData) => { 
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, updateData, { headers: authHeader() });
        return response;
    } catch (e) {
        return e;
    }
} 

const LLMService = { 
    getLLMsService,
    getSpecificLLMService,
    addLLMService,
    removeLLMService,
    editLLMService 
};

export default LLMService;