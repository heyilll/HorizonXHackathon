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

const addLLMService = async ({ name, description, dungeon_master, created_by }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/models/new`, { 
            name: name,
            description: description,
            dungeon_master: dungeon_master,
            created_by: created_by 
        },  { headers: authHeader() });
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
        const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, updateData, { headers: authHeader() });
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