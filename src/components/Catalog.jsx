import LLMCard from "./LLMCard";
import LLMService from "../services/llms.service.js";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Catalog() { 
    const [models, setModels] = useState([]); 
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => { 
        const fetchModels = async () => {
            const data = await LLMService.getLLMsService(); 
            setModels(data.models); 
            setLoading(false); 
        }; 

        fetchModels();   
    }, []); 
    
    if (loading) {
        return <div>Loading...</div>;
    }  

    return ( 
        <div className="container bg-white my-4" >
            <h2>All LLMs</h2>
            <div className="row mt-4 g-4"> 
                {models && models.length !== 0 && models.map((model) => (
                    <LLMCard key={model._id} llm={model} />))} 
            </div> 
        </div>  
    );
}

export default Catalog;