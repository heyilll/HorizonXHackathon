import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; 
import LLMService from "../services/llms.service.js";
import LLMCard from "./LLMCard";

function Search() {
    const { name } = useParams();
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
            <div className="row g-4 justify-content-between">
                <h2 className="col-6">Search</h2> 
            </div>
            
            <div className="row mt-4 g-4"> 
                {models && models.length !== 0 && models.map((model) =>{if (model.name.toLowerCase().includes(name.toLowerCase())) return <LLMCard key={model._id} llm={model} /> } )} 
            </div> 
        </div>  
    );
}

export default Search;