import LLMService from "../services/llms.service.js";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function LLMView( ) {
    const { id } = useParams();
    const [model, setModel] = useState([]); 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => { 
        const fetchModel = async () => {
            const data = await LLMService.getSpecificLLMService(id); 
            setModel(data); 
            setLoading(false); 
        }; 

        fetchModel();   
    }, []); 
    
    if (loading) {
        return <div>Loading...</div>;
    }  

    return ( 
        <div className="container my-4" > 
            <h2>LLM Name: {model.name}</h2>
            <div className="card mt-4">
                <div className="card-body">
                    <dl className="row">
                        <dt className="col-sm-3">Name:</dt>
                        <dd className="col-sm-9">[LLM NAME]</dd>

                        <dt className="col-sm-3">Company:</dt>
                        <dd className="col-sm-9">[COMPANY NAME]</dd>

                        <dt className="col-sm-3">Description:</dt>
                        <dd className="col-sm-9">[DESCRIPTION OF LLM]</dd>

                        <dt className="col-sm-3">Date of release:</dt>
                        <dd className="col-sm-9">[DATE OF RELEASE]</dd>
                    </dl>
                </div>
            </div>
        </div>  
    );
}

export default LLMView;